const express = require("express");
const router = express.Router();

// @route   GET api/coach/test
// @desc    Tests coach route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Coach Works!" }));

module.exports = router;
