


  var username = document.querySelector('#username-login')
  var password = document.querySelector('#password-login')
 var loginSubmit = document.querySelector('#loginSubmit')

loginSubmit.addEventListener("click", async () => {

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
    
    if (response.ok) {
   document.location.replace('/dashboard');

    } else {
      alert('Failed to log in.');
    }
  }






});


