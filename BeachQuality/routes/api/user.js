const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../services/config/mongo");
const _ = require("underscore");

// Beach Model
const User = require("../../models/user");
const Beach = require("../../models/beach");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// @route   GET api/user
// @desc    Get all users
// @access  Public
router.get("/", (req, res) => {
  User.find()
    .sort({ name: 1 })
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

// @route   POST api/user/register
// @desc    Create a new User
// @access  Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ message: "Email already exists!" });
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              User.findOne({ email: req.body.email }).then(user => {
                // User Matched
                // Create JWT Payload
                const payload = {
                  id: user.id,
                  name: user.name
                };
                // Sign Token
                jwt.sign(
                  payload,
                  keys.secretOrKey,
                  // 1 hour in seconds
                  { expiresIn: 3600 },
                  (err, token) => {
                    res.json({
                      account: user,
                      success: true,
                      token: "Token: " + token
                    });
                  }
                );
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   POST api/user/login
// @desc    Us
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  const { password } = req.body;

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (!user) {
      return res.status(400).json({ message: "Email does not exists!" });
    }

    // Check password
    bcrypt
      .compare(password, user.password)
      .then(isMatch => {
        if (isMatch) {
          // User Matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
          // Sign Token
          jwt.sign(
            payload,
            keys.secretOrKey,
            // 1 hour in seconds
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                account: user,
                success: true,
                token: "Token: " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      })
      .catch(err => console.error(err));
  });
});

// @route   POST api/user/userID
// @desc    Update an existing user
// @acceess Public
router.put("/:userID", (req, res) => {
  const updUser = req.body;
  User.findByIdAndUpdate(req.params.userID, updUser).then(function() {
    User.findById(req.params.userID)
      .then(user => res.json(user))
      .catch(err => console.log(err));
  });
});

// @route   POST api/user/:userID/:beachID
// @desc    Update favoriteList
// @acceess Public
router.put("/:userID/:beachID/add", async (req, res) => {
  const { userID, beachID } = req.params;

  await User.findById(userID)
    .then(async user => {
      const { favoriteList, _id, email, password } = user;

      if (favoriteList.includes(beachID)) return;

      favoriteList.push(beachID);

      const newUser = new User({
        _id,
        email,
        password,
        favoriteList
      });

      return await User.findByIdAndUpdate(_id, newUser).then(user =>
        res.json(user)
      );
    })
    .catch(err => console.log(err));
});

// @route   GET api/user/userID
// @desc    Update an existing user
// @acceess Public
router.get("/:userID", (req, res) => {
  const { userID } = req.params;

  User.findById(userID)
    .then(user => {
      return res.json(user);
    })
    .catch(err => console.log(err));
});

// @route   POST api/user/:userID/:beachID
// @desc    Update favoriteList
// @acceess Public
router.put("/:userID/:beachID/remove", async (req, res) => {
  const { userID, beachID } = req.params;

  await User.findById(userID)
    .then(async user => {
      const { favoriteList, _id, email, password } = user;
      console.log("hello");
      if (!favoriteList.includes(beachID)) return;

      var temp = _.difference(favoriteList, [beachID]);

      const newUser = new User({
        _id,
        email,
        password,
        favoriteList: temp
      });

      return await User.findByIdAndUpdate(_id, newUser).then(user =>
        res.json(user)
      );
    })
    .catch(err => console.log(err));
});

module.exports = router;
