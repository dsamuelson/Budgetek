// setup the async function so the app doesn't stall while waiting for the response
// this one adds a new comment using fetch along the appropriate route with the required data

async function commentFormHandler(event) {
    event.preventDefault()

    const comment_text = document
        .querySelector('textarea[name="comment-body"]')
        .value.trim()
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]

    if (comment_text) {
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (response.ok) {
            document.location.reload()
        } else {
            alert(response.statusText)
        }
    }
}

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler)
