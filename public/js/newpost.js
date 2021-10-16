//Functionality for comment field and comment button

var submitNewPost = document.querySelector("#submitNewPost")
var newPostBody = document.querySelector("#newPostBody")
var newPostTitle = document.querySelector("#newPostTitle")
// code for save button


async function comment(commentObj) {

  await fetch(window.location.href, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentObj)
  });
location.reload();
}

submitNewPost.addEventListener("click", () => {

  const commentObj = {
    body: newPostBody.value,
    title: newPostTitle.value
  }
  comment(commentObj)

});
