// logout
async function logout() {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "content-type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#logout-btn").addEventListener("click", logout);
