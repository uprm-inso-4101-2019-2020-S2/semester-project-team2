const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// Beach Model
const User = require("../../models/user");

// Load input validation
const validateRegisterInput = require("../validation/register");

// @route   GET api/user
// @desc    Get all users
// @access  Public
router.get("/", (req, res) => {
  User.find()
    .sort({ name: 1 })
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

// @route   GET api/user/userID
// @desc    Get user with id equal to userID
// @access  Public 
router.get("/:userID", (req, res) => {
  User.findById(req.params.userID)
  .then(user => res.json(user))
  .catch(err => console.log(err));
});

// @route   POST api/user/register
// @desc    Create a new User
// @access  Public
router.post("/register", (req, res) => {
  console.log(req.body);
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  console.log(isValid);

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
      console.log(newUser);
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   POST api/user/userID
// @desc    Update an existing user 
// @acceess Public
router.put("/:userID", (req, res) => {
  const updUser = req.body;
  User.findByIdAndUpdate(req.params.userID, updUser)
  .then(function(){
    User.findById(req.params.userID)
    .then(user => res.json(user))
    .catch(err => console.log(err));
  })
});

module.exports = router;