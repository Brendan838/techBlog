const router = require('express').Router();

const userPostData = [
    {
	id: 1,
	title: "Don't Forget!",
	userPost: "Remember guys, there are 10 types of programmers. Those who understand Binary, and those who don't.",
	userId: 1,
	username: "coderNewb",
	createdAt: "October 15th, 2021"

    },
    {
	id: 2,
	title: "Definition of Programmer",
	userPost: "A Machine that turns coffee into code",
	userId: 2,
	username: "chatBob",
	createdAt: "October 10th, 2021"

    },
    {
	id: 3,
	title: "What do you call a programmer from Finland?",
	userPost: "Nerdic",
	userId: 3,
	username: "swedeGal222",
	createdAt: "October 11th, 2021"

    },

  {
	id: 4,
	title: "Why did the programmer quit his job?",
	userPost: "He didn't get arrays.",
	userId: 1, 
	username: "coderNewb",
	createdAt: "October 14th, 2021"

    },
]

const singlePost = 
    {
	id: 1,
	title: "Don't Forget!",
	userPost: "Remember guys, there are 10 types of programmers. Those who understand Binary, and those who don't.",
	userId: 1,
	username: "coderNewb",
	createdAt: "October 15th, 2021"

    }


const comments = [

{
body: "This made me laugh!!! :)"
},
{
body: "Wow, that is 10 funny....;)"
}

]

//--------------------------------------------------------------------------------------
//Main Homepage Route
router.get('/', (req, res) => {
 
  res.render('homepage', {userPostData});
});

  module.exports = router;

router.get('/public/:id', (req, res) => {
 

//--------------------------------------------------------------------------------------
//Main route to see a specific post and its comments if you are logged in
  res.render('publicpost', {singlePost, comments});
});

  module.exports = router;
 





//--------------------------------------------------------------------------------------
//Post Route to submit comment

router.post('/public/:id', (req, res) => {
 
console.log("You Smacked the Comment route!")



});


 


  module.exports = router;