const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post } = require('../models');
const { Comment } = require('../models');

// const userPostData = [
//     {
// 	id: 1,
// 	title: "Don't Forget!",
// 	post_body: "Remember guys, there are 10 types of programmers. Those who understand Binary, and those who don't.",
// 	userId: 1,
// 	username: "coderNewb",
// 	createdAt: "October 15th, 2021"

//     },
//     {
// 	id: 2,
// 	title: "Definition of Programmer",
// 	post_body: "A Machine that turns coffee into code",
// 	userId: 2,
// 	username: "chatBob",
// 	createdAt: "October 10th, 2021"

//     },
//     {
// 	id: 3,
// 	title: "What do you call a programmer from Finland?",
// 	post_body: "Nerdic",
// 	userId: 3,
// 	username: "swedeGal222",
// 	createdAt: "October 11th, 2021"

//     },

//   {
// 	id: 4,
// 	title: "Why did the programmer quit his job?",
// 	post_body: "He didn't get arrays.",
// 	userId: 1, 
// 	username: "coderNewb",
// 	createdAt: "October 14th, 2021"

//     },
// ]

// const singlePost = 
//     {
// 	id: 1,
// 	title: "Don't Forget!",
// 	userPost: "Remember guys, there are 10 types of programmers. Those who understand Binary, and those who don't.",
// 	userId: 1,
// 	username: "coderNewb",
// 	createdAt: "October 15th, 2021"

//     }


// const comments = [

// {
// body: "This made me laugh!!! :)"
// },
// {
// body: "Wow, that is 10 funny....;)"
// }

// ]

//--------------------------------------------------------------------------------------
//Main Homepage Route
router.get('/', async (req, res) => {
 
const userPosts = await Post.findAll({

      });

  const userPostData = await userPosts.map((post) =>
         post.get({ plain: true})
       );

  res.render('homepage', {userPostData, logged_in: req.session.logged_in});
  
});


//--------------------------------------------------------------------------------------
//Main route to see a specific post and its comments if you are logged in

router.get('/public/:id', withAuth, async (req, res) => {
 
const userPost = await Post.findOne({
where: {
    id: req.params.id
}
});
const singlePost = await userPost.get({ plain: true})

const postComments = await Comment.findAll({
where: {
post_id: req.params.id
}
});

const comments = await postComments.map((post) =>
         post.get({ plain: true})
       );


  res.render('publicpost', {singlePost, comments, logged_in: req.session.logged_in});
});





 





//--------------------------------------------------------------------------------------
//Post Route to submit comment

router.post('/public/:id', async (req, res) => {
 
console.log("You Smacked the Comment route!")

await Comment.create({
      comment_body: req.body.comment_body,
      post_id: req.params.id,
      username: req.session.username
 });


});

  module.exports = router;