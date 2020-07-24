/*
 * Filename: \routes\user.js
 * Created Date: Wednesday, July 22nd 2020, 3:14:23 pm
 * Author: Kenny Gosai
 */

const connection = require("./database");
module.exports = {
  movieID: (req, res, next) => {
    let sql =
      "SELECT movieID FROM movieList WHERE username='" +
      req.session.email +
      "'";
    connection.query(sql, function (err, result) {
      if (err) {
        next(err);
        return;
      }
      res.send({ data: result });
    });
  },
  detailed: (req, res, next) => {
    let sql =
      "SELECT movieID, image, title FROM movieList WHERE username='" +
      req.session.email +
      "'";
    connection.query(sql, function (err, result) {
      if (err) {
        next(err);
        return;
      }
      res.send({ data: result });
    });
  },
  delete: (req, res, next) => {
    let sql =
      "DELETE FROM movieList WHERE username='" +
      req.session.email +
      "' AND movieID='" +
      req.body.movieID +
      "'";
    connection.query(sql, function (err, result) {
      if (err) {
        next(err);
        return;
      }
      res.status(200).end();
    });
  },
  add: (req, res, next) => {
    let sql =
      "INSERT INTO `movieList` (`username`, `movieID`, `title`, `image`) VALUES ('" +
      req.session.email +
      "', '" +
      req.body.movieID +
      "','" +
      req.body.title +
      "','" +
      req.body.image +
      "')";
    connection.query(sql, function (err, result) {
      if (err) {
        next(err);
        return;
      }
      res.send("OK");
    });
  },
};
