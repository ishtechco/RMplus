const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const auth = require("./routes/api/auth");
const recruit = require("./routes/api/recruit");
const recruits = require("./routes/api/recruits");
const coach = require("./routes/api/coach");
const coaches = require("./routes/api/coaches");

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(Error(err)));

// Passport middleware
// app.use(passport.initialize());

// Passport Config
// require('./config/passport')(passport);

app.get("/", (req, res) => res.send("hola! 44"));

// Use Routes
app.use("/api/auth", auth);
app.use("/api/recruits", recruits);
app.use("/api/coaches", coaches);
app.use("/api/recruit", recruit);
app.use("/api/coach", coach);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
