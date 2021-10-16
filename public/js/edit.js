
var deleteButton = document.querySelector("#deleteButton")
var updateButton = document.querySelector("#updateButton")
var postBody = document.querySelector("#postBody")
var postTitle = document.querySelector("#postTitle")



//code for delete button
deleteButton.addEventListener("click", () => {
deletePost()
});

//code for update button
updateButton.addEventListener("click", () => {
  const updatedPost = {
    title: postTitle.value,
    userPost: postBody.value
  }
updatePost(updatedPost)
});



async function deletePost() {
  await fetch(window.location.href, {
    method: 'DELETE'
  });
document.location.replace('/dashboard/');
}


async function updatePost(post) {

  await fetch(window.location.href, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
   document.location.replace('/dashboard/');
}

