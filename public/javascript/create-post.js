// create post
async function createPostHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const body = document.querySelector("#post-body").value.trim();

  if (body) {
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //check if all good
    if (response.ok) {
      document.location.replace("/dashboard"); //replace with post id
    } else {
      alert(response.statusText); // find better way to do this
    }
  }
}

document
  .querySelector("#create-post-btn")
  .addEventListener("click", createPostHandler);
