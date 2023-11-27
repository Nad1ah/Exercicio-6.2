const commentAreaNode = document.querySelector("#comment-content");
const feedbackComment = document.querySelector("#feedback");
const commentForm = document.forms["new-comment"];

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const author = commentForm.elements["author"].value;
  const body = commentForm.elements["text-area"].value;
  if (author === "") {
    feedbackComment.textContent = "Autor precisa estar preenchido";
    return;
  }
  if (body.length < 10) {
    feedbackComment.textContent = "O corpo tem de ter mais de 10 caracteres";
    return;
  }
  const commentNode = document.createElement("div");
  commentNode.classList.add("new-comment");
  const authorNode = document.createElement("strong");
  const bodyNode = document.createElement("p");
  const deleteButton = document.createElement("button");

  deleteButton.textContent = "Apagar Comentário";
  deleteButton.addEventListener("click", () => {
    commentAreaNode.removeChild(commentNode);
  });
  authorNode.textContent = author;
  bodyNode.textContent = body;

  commentNode.appendChild(bodyNode);
  commentNode.appendChild(authorNode);
  commentNode.appendChild(deleteButton);

  commentAreaNode.appendChild(commentNode);
  console.log(commentAreaNode);
  commentForm.reset();
  feedbackComment.textContent = "";
});
