//Functionality for comment field and comment button

var submitComment = document.querySelector("#submitComment")
var commentBody = document.querySelector("#commentBody")

// code for save button


async function comment(commentObj) {

  await fetch(window.location.href, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentObj)
  });

}

submitComment.addEventListener("click", () => {

  const commentObj = {
    comment_body: commentBody.value
  }
  comment(commentObj).then(location.reload())
;
});
