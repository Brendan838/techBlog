


  var username = document.querySelector('#username-signup')
  var password = document.querySelector('#password-signup')
 var signupSubmit = document.querySelector('#signupSubmit')

signupSubmit.addEventListener("click", async () => {

if (username.value.length < 5|| password.value.length < 5){
alert("Username and password must be at least 5 characters long.")
return

}


  if (username && password) {

    const response = await fetch(window.location.href, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)
    if (response.ok) {
      alert("You are signed up!")
      document.location.replace('/dashboard');
	

    } else {
      alert('Failed to sign up');
    }
  }






});


