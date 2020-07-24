/*
 * Filename: \public\js\pages\dashboard.js
 * Created Date: Friday, July 17th 2020, 12:12:43 pm
 * Author: Kenny Gosai
 */

fetch("/getPopular", {
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
    const movieArray = response2.movie.results;
    const tvArray = response2.tv.results;
    let userData;
    var htmlMovie = "";
    var htmlTV = "";
    fetch("/user/data", {
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
        userData = response2.data;
        for (var i = 0; i < 20; i++) {
          htmlTV += '<div class="col mb-4">';
          htmlTV += '<div class="card h-100">';
          htmlTV +=
            '<div id="itemIDTV' +
            i +
            '" style="display:none">' +
            tvArray[i].id +
            "</div>";
          if (tvArray[i].poster_path !== null) {
            htmlTV +=
              '<div style="background: rgba(0, 0, 0, .65) url(https://image.tmdb.org/t/p/original/' +
              tvArray[i].poster_path +
              '); min-height:400px; max-height: 400px; background-size: cover;" class="card-img-top" alt="backdrop" id="imageTV' +
              i +
              '">';
            htmlTV +=
              '<p  id="description' + i + '">' + tvArray[i].overview + "</p>";
            htmlTV += "</div>";
          }
          htmlTV +=
            '<div class="card-body d-flex flex-column justify-content-between">';
          if (tvArray[i].title == undefined) {
            htmlTV +=
              '<h5 class="card-title" id="titleTV' +
              i +
              '">' +
              tvArray[i].name +
              "</h5>";
          } else {
            htmlTV +=
              '<h5 class="card-title" id="titleTV' +
              i +
              '">' +
              tvArray[i].title +
              "</h5>";
          }
          const foundTV = userData.find(
            (element) => element.movieID === tvArray[i].id
          );
          if (foundTV === undefined) {
            htmlTV +=
              '<button class="btn btn-primary" id="buttonTV' +
              i +
              '" onClick="addDataSearchTV(' +
              i +
              ')" >Save show</button>';
          } else {
            htmlTV +=
              '<button type="button" id="buttonTV' +
              i +
              '" class="btn btn-danger" onClick="deleteDataSearchTV(' +
              i +
              ')">Remove show</button>';
          }
          htmlTV += "</div>";
          htmlTV += "</div>";
          htmlTV += "</div>";
          htmlMovie += '<div class="col mb-4">';
          htmlMovie += '<div class="card h-100">';
          htmlMovie +=
            '<div id="itemID' +
            i +
            '" style="display:none">' +
            movieArray[i].id +
            "</div>";
          if (movieArray[i].poster_path !== null) {
            htmlMovie +=
              '<div style="background: rgba(0, 0, 0, .65) url(https://image.tmdb.org/t/p/original/' +
              movieArray[i].poster_path +
              '); min-height:400px; max-height: 400px; background-size: cover;" class="card-img-top" alt="backdrop" id="image' +
              i +
              '">';
            htmlMovie +=
              '<p  id="description' +
              i +
              '">' +
              movieArray[i].overview +
              "</p>";
            htmlMovie += "</div>";
          }
          htmlMovie +=
            '<div class="card-body d-flex flex-column justify-content-between">';
          if (movieArray[i].title == undefined) {
            htmlMovie +=
              '<h5 class="card-title" id="title' +
              i +
              '">' +
              movieArray[i].name +
              "</h5>";
          } else {
            htmlMovie +=
              '<h5 class="card-title" id="title' +
              i +
              '">' +
              movieArray[i].title +
              "</h5>";
          }
          const found = userData.find(
            (element) => element.movieID === movieArray[i].id
          );
          if (found === undefined) {
            htmlMovie +=
              '<button class="btn btn-primary" id="button' +
              i +
              '" onClick="addDataSearch(' +
              i +
              ')" >Save movie</button>';
          } else {
            htmlMovie +=
              '<button type="button" id="button' +
              i +
              '" class="btn btn-danger" onClick="deleteDataSearch(' +
              i +
              ')">Remove movie</button>';
          }
          htmlMovie += "</div>";
          htmlMovie += "</div>";
          htmlMovie += "</div>";
        }
        if (htmlMovie !== "") {
          document.getElementById("movielistSearch").innerHTML = htmlMovie;
          document.getElementById("movieTitle").innerHTML = " Popular Movies";
        }
        if (htmlTV !== "") {
          document.getElementById("tvlistSearch").innerHTML = htmlTV;
          document.getElementById("tvTitle").innerHTML = " Popular TV";
        }
      })
      .catch(function (err) {
        document.getElementById("errormsg").innerHTML =
          "Error communicating with Server";
        document.getElementById("alert").style.display = "";
      });
  })
  .catch(function (err) {
    document.getElementById("errormsg").innerHTML =
      "Error communicating with Server";
    document.getElementById("alert").style.display = "";
  });
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("/search", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      search: document.getElementById("search").value,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response2) {
      fetch("/user/data", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(function (response3) {
          return response3.json();
        })
        .then(function (response4) {
          var htmlMovie = "";
          var htmlTV = "";
          const movieArray = response2.data.results;
          let userData = response4.data;
          for (var i = 0; i < response2.data.results.length; i++) {
            htmlMovie += '<div class="col mb-4">';
            htmlMovie += '<div class="card h-100">';
            htmlMovie +=
              '<div id="itemID' +
              i +
              '" style="display:none">' +
              movieArray[i].id +
              "</div>";
            if (
              movieArray[i].poster_path !== null &&
              movieArray[i].poster_path !== undefined
            ) {
              htmlMovie +=
                '<div style="background: rgba(0, 0, 0, .65) url(https://image.tmdb.org/t/p/original/' +
                movieArray[i].poster_path +
                '); min-height:400px; max-height: 400px; background-size: cover;" class="card-img-top" alt="backdrop" id="image' +
                i +
                '">';
              htmlMovie +=
                '<p  id="description' +
                i +
                '">' +
                movieArray[i].overview +
                "</p>";
              htmlMovie += "</div>";
            }
            htmlMovie +=
              '<div class="card-body d-flex flex-column justify-content-between">';
            if (movieArray[i].title == undefined) {
              htmlMovie +=
                '<h5 class="card-title" id="title' +
                i +
                '">' +
                movieArray[i].name +
                "</h5>";
            } else {
              htmlMovie +=
                '<h5 class="card-title" id="title' +
                i +
                '">' +
                movieArray[i].title +
                "</h5>";
            }
            const found = userData.find(
              (element) => element.movieID === movieArray[i].id
            );
            if (found === undefined) {
              htmlMovie +=
                '<button class="btn btn-primary" id="button' +
                i +
                '" onClick="addDataSearch(' +
                i +
                ')" >Save movie</button>';
            } else {
              htmlMovie +=
                '<button type="button" id="button' +
                i +
                '" class="btn btn-danger" onClick="deleteDataSearch(' +
                i +
                ')">Remove movie</button>';
            }
            htmlMovie += "</div>";
            htmlMovie += "</div>";
            htmlMovie += "</div>";
          }
          if (htmlMovie !== "") {
            document.getElementById("movielistSearch").innerHTML = htmlMovie;
            document.getElementById("movieTitle").innerHTML = "Search Results";
          } else {
            document.getElementById("movieTitle").innerHTML =
              "No results found";
            document.getElementById("movielistSearch").innerHTML = "";
          }
          document.getElementById("tvlistSearch").innerHTML = "";
          document.getElementById("tvTitle").innerHTML = "";
        })
        .catch((err) => {
          document.getElementById("errormsg").innerHTML =
            "Error communicating with Server";
          document.getElementById("alert").style.display = "";
        });
    })
    .catch(function (err) {
      document.getElementById("errormsg").innerHTML =
        "Error communicating with Server";
      document.getElementById("alert").style.display = "";
    });
});
/**
 * Removes movie from saved list
 * @param {Number} id - id of element being removed
 */
function deleteDataSearch(id) {
  document.getElementById("button" + id).setAttribute("disabled", "disabled");
  const movieID = document.getElementById("itemID" + id).innerHTML;
  fetch("/delete/data", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      movieID: movieID,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      document.getElementById("button" + id).removeAttribute("disabled");
      document.getElementById("button" + id).onclick = function () {
        addDataSearch(id);
      };
      document.getElementById("button" + id).innerHTML = "Save movie";
      document.getElementById("button" + id).className = "btn btn-primary";
      return response;
    })
    .catch(function (err) {
      document.getElementById("button" + id).removeAttribute("disabled");
      document.getElementById("errormsg").innerHTML =
        "Error communicating with Server";
      document.getElementById("alert").style.display = "";
    });
}
/**
 * Removes tv show from saved list
 * @param {Number} id - id of element being removed
 */
function deleteDataSearchTV(id) {
  document.getElementById("buttonTV" + id).setAttribute("disabled", "disabled");
  const movieID = document.getElementById("itemIDTV" + id).innerHTML;
  fetch("/delete/data", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      movieID: movieID,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      document.getElementById("buttonTV" + id).removeAttribute("disabled");
      document.getElementById("buttonTV" + id).onclick = function () {
        addDataSearchTV(id);
      };
      document.getElementById("buttonTV" + id).innerHTML = "Save show";
      document.getElementById("buttonTV" + id).className = "btn btn-primary";
      return response;
    })
    .catch(function (err) {
      document.getElementById("buttonTV" + id).removeAttribute("disabled");
      document.getElementById("errormsg").innerHTML =
        "Error communicating with Server";
      document.getElementById("alert").style.display = "";
    });
}
/**
 * Adds movie to saved list
 * @param {Number} id - id of element being saved
 */
function addDataSearch(id) {
  document.getElementById("button" + id).setAttribute("disabled", "disabled");
  const movieID = document.getElementById("itemID" + id).innerHTML;
  const title = document.getElementById("title" + id).innerHTML;
  let image = $("#image" + id).css("background-image");
  if (image !== undefined) {
    image = image.replace(/(url\(|\)|")/g, "");
  } else {
    image = null;
  }
  fetch("/addToList", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      movieID: movieID,
      title: title,
      image: image,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      document.getElementById("button" + id).removeAttribute("disabled");
      document.getElementById("button" + id).onclick = function () {
        deleteDataSearch(id);
      };
      document.getElementById("button" + id).innerHTML = "Remove movie";
      document.getElementById("button" + id).className = "btn btn-danger";
      return response;
    })
    .catch(function (err) {
      document.getElementById("button" + id).removeAttribute("disabled");
      document.getElementById("errormsg").innerHTML =
        "Error communicating with Server";
      document.getElementById("alert").style.display = "";
    });
}
/**
 * Adds tv to saved list
 * @param {Number} id - id of element being saved
 */
function addDataSearchTV(id) {
  document.getElementById("buttonTV" + id).setAttribute("disabled", "disabled");
  const movieID = document.getElementById("itemIDTV" + id).innerHTML;
  const title = document.getElementById("titleTV" + id).innerHTML;
  let image = $("#imageTV" + id).css("background-image");
  image = image.replace(/(url\(|\)|")/g, "");
  fetch("/addToList", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      movieID: movieID,
      title: title,
      image: image,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      document.getElementById("buttonTV" + id).removeAttribute("disabled");
      document.getElementById("buttonTV" + id).onclick = function () {
        deleteDataSearchTV(id);
      };
      document.getElementById("buttonTV" + id).innerHTML = "Remove show";
      document.getElementById("buttonTV" + id).className = "btn btn-danger";
      return response;
    })
    .catch(function (err) {
      document.getElementById("buttonTV" + id).removeAttribute("disabled");
      document.getElementById("errormsg").innerHTML =
        "Error communicating with Server";
      document.getElementById("alert").style.display = "";
    });
}
document.getElementById("alert").style.display = "none";
