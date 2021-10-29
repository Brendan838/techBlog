var usernameField = document.querySelector('#username-login')
var passwordField = document.querySelector('#password-login')
var loginSubmit = document.querySelector('#loginSubmit')


loginSubmit.addEventListener("click", async () => {

if (usernameField.value.length < 5|| passwordField.value.length < 5){
alert("Username and password must be at least 5 characters long.")
return

}


  if (usernameField.value && passwordField.value) {

const existingUser = {
username: usernameField.value,
password: passwordField.value

}

    const response = await fetch(window.location.href, {
      method: 'POST',
      body: JSON.stringify(existingUser),
      headers: {'Content-Type': 'application/json'},
    });
    
    if (response.ok) {
   document.location.replace('/dashboard');

    } else {
      alert('Failed to log in.');
    }
  }






});


