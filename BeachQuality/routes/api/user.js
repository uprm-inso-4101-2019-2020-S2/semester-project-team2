const express = require("express");
const router = express.Router();

// Beach Model
const User = require("../../models/user");

// Load input validation
const validateRegisterInput = require('../validation/register');

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
router.post('/register', (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          const newUser = new User({
            email: req.body.email,
            password: req.body.password
          });

          // Hash password before saving in database
          bcrypt.getSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            })
          })
        }
      })
})
