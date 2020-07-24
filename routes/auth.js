/*
 * Filename: \routes\auth.js
 * Created Date: Wednesday, July 22nd 2020, 1:25:03 pm
 * Author: Kenny Gosai
 */

const connection = require("./database");
const bcrypt = require("bcrypt");
require("dotenv").config();
module.exports = {
  login: (req, res, next) => {
    connection.query(
      "SELECT * FROM users WHERE username = '" + req.body.username + "'",
      function (err, result) {
        if (err) {
          next(err);
          return;
        }
        if (result.length === 0) {
          res.status(401).send("Sorry, cant find that");
          return;
        }
        let myPlaintextPassword = req.body.password;
        let hash = result[0].password;
        bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
          if (result == true) {
            req.session.email = req.body.username;
            res.status(200).send("OK");
          } else {
            res.status(401).send("Sorry, cant find that");
          }
        });
      }
    );
  },
  register: (req, res, next) => {
    connection.query(
      "SELECT * FROM users WHERE username = '" + req.body.username + "'",
      function (err, result) {
        if (err) {
          next(err);
          return;
        }
        if (result.length === 0) {
          let myPlaintextPassword = req.body.password;
          bcrypt.hash(
            myPlaintextPassword,
            parseInt(process.env.SALT_ROUNDS),
            function (err, hash) {
              if (err) {
                next(err);
                return;
              }
              let sql =
                "INSERT INTO `users` (`username`, `password`) VALUES ('" +
                req.body.username +
                "', '" +
                hash +
                "')";
              connection.query(sql, function (err, result) {
                if (err) {
                  next(err);
                  return;
                }
                req.session.email = req.body.username;
                res.status(200).send("OK");
              });
            }
          );
        } else {
          res.status(401).send("Email is already in use.");
        }
      }
    );
  },
  logout: (req, res, next) => {
    req.session.destroy();
    res.status(200).send("OK");
  },
};
