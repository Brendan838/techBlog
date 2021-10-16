const router = require('express').Router();


//--------------------------------------------------------------------------------------
//Get route to render login screen
router.get('/login', (req, res) => {
 
  res.render('login');
});


//--------------------------------------------------------------------------------------
//Post Route to sign in as new user
router.post('/login', (req, res) => {
  console.log('You are logged in!')
  res.json('You are logged in!');
});



//--------------------------------------------------------------------------------------
//Get Route to render signup page
router.get('/signup', (req, res) => {
 
  res.render('signup');
});

//--------------------------------------------------------------------------------------
//Post Route to sign up as new user
router.post('/signup', (req, res) => {
 console.log('You are signed up!')
    res.json('You are signed up!');
});

  module.exports = router;
