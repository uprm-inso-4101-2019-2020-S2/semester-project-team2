const express = require("express");
const router = express.Router();

// Beach Model
const Beach = require("../models/beach");

// @route   GET api/beaches
// @desc    Get all Beach
// @access  Public

router.get("/", (req, res) => {
  Beach.find()
    .sort({ name: 1 })
    .then(beach => res.json(beach));
});

// @route   GET api/beach/:beachID
// @desc    Get BeachID
// @access  Public
router.get("/:beachID", (req, res) => {
  Team.findById(req.params.beachID).then(beach => res.json(beach));
});

module.exports = router;
