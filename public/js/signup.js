


  var usernameField = document.querySelector('#username-signup')
  var passwordField = document.querySelector('#password-signup')
 var signupSubmit = document.querySelector('#signupSubmit')

signupSubmit.addEventListener("click", async () => {

if (usernameField.value.length < 5|| passwordField.value.length < 5){
alert("Username and password must be at least 5 characters long.")
return

}


if (usernameField.value && passwordField.value) {

const newUser = {
username: usernameField.value,
password: passwordField.value

}

    const response = await fetch(window.location.href, {
      method: 'POST',
      body: JSON.stringify(newUser),
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


