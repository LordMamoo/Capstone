const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/dist")));

mongoose.connect('mongodb://localhost:27017/auth-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

require('./config/passport')(passport);
app.use(passport.initialize());

app.use('/api/auth', require('./routes/auth'));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});