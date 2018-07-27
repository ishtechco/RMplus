const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

// Load Auth Model
const Auth = require("../../models/Auth");
// @route   GET api/auth/test
// @desc    Tests auth route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Auth Works!" }));

// @route   GET api/auth/register
// @desc    Register user
// @access  Public
router.post("/register", (req, res) => {
  Auth.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", // size
        r: "pg", // rating
        d: "mm" // default to initials
      });
      const newUser = newUser({
        name: req.body.name,
        email: req.body.email,
        avatar: avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(Error(err)));
        });
      });
    }
  });
});

module.exports = router;
