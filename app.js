const commentAreaNode = document.querySelector("#comment-content");

const commentForm = document.forms["new-comment"];

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const author = commentForm.elements["author"].value;
  const body = commentForm.elements["text-area"].value;

  const commentNode = document.createElement("div");
  commentNode.classList.add("new-comment");
  const authorNode = document.createElement("strong");
  const bodyNode = document.createElement("p");

  authorNode.textContent = author;
  bodyNode.textContent = body;

  commentNode.appendChild(bodyNode);
  commentNode.appendChild(authorNode);

  commentAreaNode.appendChild(commentNode);
  console.log(commentAreaNode);
  commentForm.reset();
});
