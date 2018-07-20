const express = require("express");
const router = express.Router();

// @route   GET api/recruits/test
// @desc    Tests recruits route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Recruits Works!" }));

module.exports = router;
