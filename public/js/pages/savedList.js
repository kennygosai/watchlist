/*
 * Filename: \public\js\pages\savedList.js
 * Created Date: Tuesday, July 21st 2020, 11:00:42 am
 * Author: Kenny Gosai
 */

/**
 * Removes movie from saved list
 * @param {Number} id - id of element being removed
 */
function deleteSaved(id) {
  document.getElementById("button" + id).setAttribute("disabled", "disabled");
  fetch("/delete/data", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      movieID: document.getElementById("itemID" + id).innerHTML,
    }),
  })
    .then(function (response) {
      document.getElementById("button" + id).removeAttribute("disabled");
      document.getElementById("item" + id).className = "";
      document.getElementById("item" + id).style.display = "none";
    })
    .catch(function (err) {
      document.getElementById("button" + id).removeAttribute("disabled");
      document.getElementById("errormsg").innerHTML =
        "Error communicating with Server";
      document.getElementById("alert").style.display = "";
    });
}
fetch("/user/data/detailed", {
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
    return response.json();
  })
  .then(function (response2) {
    var html = "";
    for (var i = 0; i < response2.data.length; i++) {
      html += '<div class="col mb-4" id="item' + i + '">';
      html += '<div class="card h-100">';
      html +=
        '<div id="itemID' +
        i +
        '" style="display:none">' +
        response2.data[i].movieID +
        "</div>";
      if (
        response2.data[i].image !== null &&
        response2.data[i].image !== undefined
      ) {
        html +=
          '<div style="background: rgba(0, 0, 0, .65) url(' +
          response2.data[i].image +
          '); min-height:400px; max-height: 400px; background-size: cover;" class="card-img-top" alt="backdrop" id="image' +
          i +
          '">';
        html += "</div>";
      }
      html +=
        '<div class="card-body d-flex flex-column justify-content-between">';
      html +=
        '<h5 class="card-title" id="title' +
        i +
        '">' +
        response2.data[i].title +
        "</h5>";

      html +=
        '<button type="button" id="button' +
        i +
        '" class="btn btn-danger" onClick="deleteSaved(' +
        i +
        ')">Remove movie</button>';

      html += "</div>";
      html += "</div>";
      html += "</div>";
    }
    if (html !== "") {
      document.getElementById("movielistSearch").innerHTML = html;
      document.getElementById("movieTitle").innerHTML = "Your Watch List";
    } else {
      document.getElementById("movieTitle").innerHTML = "Nothing Saved Yet";
    }
  })
  .catch(function (err) {
    document.getElementById("errormsg").innerHTML =
      "Error communicating with Server";
    document.getElementById("alert").style.display = "";
  });

document.getElementById("alert").style.display = "none";
