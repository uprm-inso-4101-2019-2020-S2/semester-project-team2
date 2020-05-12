const express = require("express");
const router = express.Router();

// Beach Model
const Beach = require("../../models/beach");

// @route   GET api/beach
// @desc    Get all Beach
// @access  Public

router.get("/", (req, res) => {
  Beach.find()
    .sort({ name: 1 })
    .then(beach => res.json(beach))
    .catch(err => console.log(err));
});

// @route   GET api/beach/:beachID
// @desc    Get BeachID
// @access  Public
router.get("/:beachID", (req, res) => {
  Beach.findById(req.params.beachID)
    .then(beach => res.json(beach))
    .catch(err => console.log(err));
});

// @route   DELETE api/beach/deleteBeach/:beachID
// @desc    Delete beach with id equal to beachID
// @access  Private
router.delete("/deleteBeach/:beachID", (req, res) => {
  Beach.findByIdAndDelete(req.params.beachID)
  .then(beach => res.json(beach))
  .catch(err => console.log(err));
});


// @route   POST api/beach/addBeach
// @desc    Add new Beach to DB
// @access  Private
router.post('/addBeach', (req, res) => {
  const newBeach = new Beach({
    name: req.body.name,
    image: req.body.image,
    location: req.body.location,
    quality: req.body.quality
  });

  newBeach
    .save()
    .then(beach => res.json(beach))
    .catch(err => console.log(err));
})

// @route   PUT api/beach/:beachID
// @desc    PUT BeachID
// @access  Private
router.put("/updateBeach/:beachID", (req, res) => {
  const updBeach = req.body;
  Beach.findByIdAndUpdate(req.params.beachID, updBeach)
    .then(() => {
      Beach.findById(req.params.beachID)
        .then(beach => res.json(beach))
        .catch(err => console.log(err))
    })
    .catch(err => console.error(err))
});

module.exports = router;
