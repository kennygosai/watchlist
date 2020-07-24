/*
 * Filename: \public\js\auth\register.js
 * Created Date: Tuesday, July 21st 2020, 10:05:06 am
 * Author: Kenny Gosai
 */

const myFormRegister = document.getElementById("myFormRegister");
myFormRegister.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("main-btn").setAttribute("disabled", "disabled");

  if (
    document.getElementById("userEmail").value !== "" &&
    document.getElementById("userPassword").value !== "" &&
    document.getElementById("userPasswordConfirm").value !== ""
  ) {
    if (
      document.getElementById("userPasswordConfirm").value ===
      document.getElementById("userPassword").value
    ) {
      fetch("/register/data", {
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
          document.getElementById("main-btn").removeAttribute("disabled");
          if(response.status === 200){
            location.href = "dashboard";
          } else if(response.status === 401){
            document.getElementById("errormsg").innerHTML =
              "Email is already in use.";
            document.getElementById("alert").style.display = "";
          }
          return response;
        })
        .catch(function (err) {
          document.getElementById("main-btn").removeAttribute("disabled");
          document.getElementById("errormsg").innerHTML =
              "Error communicating with the server.";
            document.getElementById("alert").style.display = "";
        });
    } else {
      document.getElementById("main-btn").removeAttribute("disabled");
      document.getElementById("errormsg").innerHTML =
        "Passwords don't match";
      document.getElementById("alert").style.display = "";
    }
  } else {
    document.getElementById("main-btn").removeAttribute("disabled");
    document.getElementById("errormsg").innerHTML =
      "Please fill out all fields";
    document.getElementById("alert").style.display = "";
  }
});
document.getElementById("alert").style.display = "none";
