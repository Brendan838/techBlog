const router = require('express').Router();
const e = require('express');
const { User } = require('../models');

//--------------------------------------------------------------------------------------
//Get route to render login screen
router.get('/login', (req, res) => {
 
  res.render('login');
});


//--------------------------------------------------------------------------------------
//Post Route to sign in as new user
router.post('/login', async (req, res) => {


 try {
        const dbUserData = await User.findOne({
          where: {
            username: req.body.username
          }
        });
    
        if (!dbUserData) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password. Please try again!' });
          return;
        }
    
        const validPassword = await dbUserData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password. Please try again!' });
          return;
        }
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.logged_in = true;
            req.session.username = dbUserData.username

             console.log('You are logged in!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', req.session.logged_in)
            // console.log("user logged in", dbUserData, )
            res
              .status(200)
              .json({ user: dbUserData, message: 'You are now logged in!' })
          });

       
           
        } catch (err) {
          console.log(err);
          res.status(400).json(err);
        }


});



//--------------------------------------------------------------------------------------
//Get Route to render signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});

//--------------------------------------------------------------------------------------
//Post Route to sign up as new user
router.post('/signup', async (req, res) => {

console.log(req.body.username)
console.log(req.body.password)


 try {
      const dbUserData = await User.create({
        username: req.body.username,
        password: req.body.password,
      })


      

     req.session.save(() => {
        req.session.logged_in = true
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        res.status(200).json(dbUserData);
      });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//--------------------------------------------------------------------------------------
//Post Route to log out

router.get('/logout', (req, res) => {

  if (req.session.logged_in) {
    req.session.destroy(() => {
     console.log("you were logged in, now logged out!!!!!!!!!!!!!!!!!!!!!!!!!!!")
     res.redirect('/');
    
    });
  
  } 
  else {
  res.redirect('/');
  console.log("You weren't ever logged in!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  
  }
  });

  module.exports = router;
