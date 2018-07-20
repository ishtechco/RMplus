const express = require("express");
const router = express.Router();

// @route   GET api/coaches/test
// @desc    Tests coaches route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Coaches Works!" }));

module.exports = router;
