document.querySelector("#newComment").addEventListener("submit", async event => {
  event.preventDefault();
  const comment = {
    body: document.querySelector("#comment").value,
    blogIdId: document.querySelector("#hiddenCommentId").value,
  };

  try {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      console.log("Comment posted");
      const data = await res.json();

      if (data && data.comment && data.comment.body) {
        const newComment = data.comment;
        const commentTemplate = `
          <section class="card">
            <div class="card-body">
              <p>Comment</p>
              <p class="card-text">${newComment.body}</p>
            </div>
          </section>
        `;
        document.querySelector("#currentBlogComment").insertAdjacentHTML("beforeend", commentTemplate);
        document.querySelector("#comment").value = ""; // Clear the comment input field
      } else {
        throw new Error("Invalid response data");
      }
    } else {
      throw new Error("Comment submission failed");
    }
  } catch (error) {
    console.error(error);
    alert("Please try again");
  }
});
