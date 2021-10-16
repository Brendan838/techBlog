const router = require('express').Router();

const singleUserData = [
    {
	id: 1,
	title: "Don't Forget!",
	userPost: "Remember guys, there are 10 types of programmers. Those who understand Binary, and those who don't.",
	userId: 1,
	username: "coderNewb",
	createdAt: "October 15th, 2021"

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

const editPost = [
    {
	id: 1,
	title: "Don't Forget!",
	userPost: "Remember guys, there are 10 types of programmers. Those who understand Binary, and those who don't.",
	userId: 1,
	username: "coderNewb",
	createdAt: "October 15th, 2021"

    },

]
//--------------------------------------------------------------------------------------
//Main Dashboard routeroute to get main dashboard page with populated user posts from relevant user

//
router.get('/', (req, res) => {
 
  res.render('dashboard', {singleUserData});
});



//--------------------------------------------------------------------------------------
//Dashboard POST Route to submit a brand new post

router.post('/', (req, res) => {
 
  console.log(req.body)
res.json(req.body)
});




//----------------------------------------------------------------------------------------\
//Dashboard POST Route to submit a brand new post
router.get('/:id', (req, res) => {
 
  res.render('editpost', {editPost});
});

 
//----------------------------------------------------------------------------------------\
//Dashboard PUT and DELETE Routes for when you click on a given post

router.put('/:id', (req, res) => {
 console.log("you smacked the update route")
  res.json("you smacked the update route")
});


router.delete('/:id', (req, res) => {
 
 console.log("you smacked the delete route")
	  res.json("you smacked the delete route")
});












  module.exports = router;
