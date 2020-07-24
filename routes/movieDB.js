/*
 * Filename: \routes\movieDB.js
 * Created Date: Wednesday, July 22nd 2020, 3:36:34 pm
 * Author: Kenny Gosai
 */

const fetch = require("node-fetch");
require("dotenv").config();
module.exports = {
  search: (req, res, next) => {
    fetch(
      "https://api.themoviedb.org/3/search/multi?api_key=" +
        process.env.MOVIEDB_KEY +
        "&language=en-US&page=1&include_adult=false&query=" +
        req.body.search
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response2) {
        res.send({ data: response2 });
      })
      .catch(function (err) {
        next(err);
        return;
      });
  },
  popular: (req, res, next) => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=" +
        process.env.MOVIEDB_KEY +
        "&language=en-US&page=1"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response2) {
        fetch(
          "https://api.themoviedb.org/3/tv/popular?api_key=" +
            process.env.MOVIEDB_KEY +
            "&language=en-US&page=1"
        )
          .then(function (response3) {
            return response3.json();
          })
          .then(function (response4) {
            res.send({ movie: response2, tv: response4 });
          })
          .catch(function (err) {
            next(err);
            return;
          });
      })
      .catch(function (err) {
        next(err);
        return;
      });
  },
};
