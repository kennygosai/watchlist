/*
 * Filename: \public\js\auth\logout.js
 * Created Date: Friday, July 17th 2020, 1:51:53 pm
 * Author: Kenny Gosai
 */

document.getElementById("logout").addEventListener("click", function () {
  fetch("/logout", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      location.href = "/";
      return response;
    })
    .catch(function (err) {
      document.getElementById("errormsg").innerHTML =
        "Error communicating with the server";
      document.getElementById("alert").style.display = "";
    });
});
