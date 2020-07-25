/*
 * Filename: \server.js
 * Created Date: Saturday, June 27th 2020, 11:53:48 am
 * Author: Kenny Gosai
 */

const express = require("express");
const session = require("express-session");
const path = require("path");
const routes = require("./routes/routes");
const auth = require("./routes/auth");
const user = require("./routes/user");
const movieDB = require("./routes/movieDB");
require("dotenv").config();
const app = express();
const port = process.env.port || 8080;
app.use(
  session({
    secret: process.env.BCRYPT_SECRET,
    saveUninitialized: true,
    resave: true,
  })
);
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "public")));
app.get("/", routes.home);
app.get("/login", routes.login);
app.get("/register", routes.register);
app.get("/dashboard", routes.dashboard);
app.get("/savedlist", routes.savedlist);
app.post("/user/data", user.movieID);
app.post("/user/data/detailed", user.detailed);
app.post("/addToList", user.add);
app.post("/delete/data", user.delete);
app.post("/search", movieDB.search);
app.post("/getPopular", movieDB.popular);
app.post("/login/data", auth.login);
app.post("/register/data", auth.register);
app.post("/logout", auth.logout);
app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
