/*
 * Filename: \routes\routes.js
 * Created Date: Wednesday, July 22nd 2020, 1:44:33 pm
 * Author: Kenny Gosai
 */

const path = require("path");
module.exports = {
  home: (req, res) => {
    if (req.session.email) {
      res.redirect("/dashboard");
    } else {
      res.sendFile(path.join(__dirname + "/../client/index.html"));
    }
  },
  login: (req, res) => {
    if (req.session.email) {
      res.redirect("/dashboard");
    } else {
      res.sendFile(path.join(__dirname + "/../client/login.html"));
    }
  },
  register: (req, res) => {
    if (req.session.email) {
      res.redirect("/dashboard");
    } else {
      res.sendFile(path.join(__dirname + "/../client/register.html"));
    }
  },
  dashboard: (req, res) => {
    if (req.session.email) {
      res.sendFile(path.join(__dirname + "/../client/dashboard.html"));
    } else {
      res.redirect("/");
    }
  },
  savedlist: (req, res) => {
    if (req.session.email) {
      res.sendFile(path.join(__dirname + "/../client/savedlist.html"));
    } else {
      res.redirect("/");
    }
  },
};
