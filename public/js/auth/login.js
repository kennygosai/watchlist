/*
 * Filename: \public\js\auth\login.js
 * Created Date: Tuesday, July 21st 2020, 10:05:35 am
 * Author: Kenny Gosai
 */

const myFormLogin = document.getElementById("myFormLogin");
myFormLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("login_btn").setAttribute("disabled", "disabled");
  if (
    document.getElementById("userEmail").value !== "" &&
    document.getElementById("userPassword").value !== ""
  ) {
    fetch("/login/data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: document.getElementById("userEmail").value,
        password: document.getElementById("userPassword").value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        document.getElementById("login_btn").removeAttribute("disabled");
        if (response.status === 200) {
          location.href = "dashboard";
        } else if (response.status === 401) {
          document.getElementById("login_btn").removeAttribute("disabled");
          document.getElementById("errormsg").innerHTML =
            "Email or Password is incorrect.";
          document.getElementById("alert").style.display = "";
        }
        return response;
      })
      .catch(function (err) {
        document.getElementById("login_btn").removeAttribute("disabled");
        document.getElementById("errormsg").innerHTML =
          "Error communicating with the server.";
        document.getElementById("alert").style.display = "";
      });
  } else {
    document.getElementById("login_btn").removeAttribute("disabled");
    document.getElementById("errormsg").innerHTML =
      "Please fill out all fields";
    document.getElementById("alert").style.display = "";
  }
});
document.getElementById("alert").style.display = "none";
