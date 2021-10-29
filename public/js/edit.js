
var deleteButton = document.querySelector("#deleteButton")
var updateButton = document.querySelector("#updateButton")
var postBody = document.querySelector("#postBody")
var postTitle = document.querySelector("#postTitle")



//code for delete button
deleteButton.addEventListener("click", () => {
deletePost().then(document.location.replace('/dashboard'))
});

//code for update button
updateButton.addEventListener("click", () => {
  const updatedPost = {
    title: postTitle.value,
    post_body: postBody.value
  }
updatePost(updatedPost).then(document.location.replace('/dashboard'))
});



async function deletePost() {
  await fetch(window.location.href, {
    method: 'DELETE'
  });

}


async function updatePost(post) {

  await fetch(window.location.href, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
   ;
}

