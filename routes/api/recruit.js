const express = require("express");
const router = express.Router();

// @route   GET api/recruit/test
// @desc    Tests recruit route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Recruit Works!" }));

module.exports = router;
