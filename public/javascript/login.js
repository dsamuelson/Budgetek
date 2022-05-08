// login
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/user");
    } else {
      alert(response.statusText);
    }
  }
}

// show signup
function showSignup(event) {
  event.preventDefault();
  const element = document.querySelector("#signUpDisplay");
  const login = document.querySelector(".login-form");
  const loginTitle = document.querySelector(".login-title");
  const secondCol = document.querySelector("#secondCol");

  // apply changes to signup display
  element.style.width = "100%";
  element.style.display = "block";

  // remove elements to display signup form
  event.target.style.display = "none";
  loginTitle.style.display = "none";
  login.style.display = "none";
  secondCol.style.display = "none";
}


// signup
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/user", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
document
  .querySelector("#showSignup")
  .addEventListener("click", showSignup);