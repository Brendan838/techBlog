const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Post } = require('../models');


// const singleUserData = [
//     {
// 	id: 1,
// 	title: "Don't Forget!",
// 	userPost: "Remember guys, there are 10 types of programmers. Those who understand Binary, and those who don't.",
// 	userId: 1,
// 	username: "coderNewb",
// 	createdAt: "October 15th, 2021"

//     },

//   {
// 	id: 4,
// 	title: "Why did the programmer quit his job?",
// 	userPost: "He didn't get arrays.",
// 	userId: 1, 
// 	username: "coderNewb",
// 	createdAt: "October 14th, 2021"

//     },
// ]

// const editPost = [
//     {
// 	id: 1,
// 	title: "Don't Forget!",
// 	userPost: "Remember guys, there are 10 types of programmers. Those who understand Binary, and those who don't.",
// 	userId: 1,
// 	username: "coderNewb",
// 	createdAt: "October 15th, 2021"

//     },

// ]
//--------------------------------------------------------------------------------------
//Main Dashboard routeroute to get main dashboard page with populated user posts from relevant user

//
router.get('/', withAuth, async (req, res) => {
 
const userPosts = await Post.findAll({
//       include: [{model: User}],
        where: {
          user_id: req.session.user_id
        }
      });

  const singleUserData = await userPosts.map((post) =>
         post.get({ plain: true})
       );

	console.log(singleUserData)
  res.render('dashboard', {singleUserData, logged_in: req.session.logged_in});
});



//--------------------------------------------------------------------------------------
//Dashboard POST Route to submit a brand new post

router.post('/', async (req, res) => {
 
console.log(req.body)
await Post.create({
      title: req.body.title,
      post_body: req.body.post_body,
      //user_id: req.session.user_id
      user_id: req.session.user_id,
      username: req.session.username

 });


res.json(req.body)
});




//----------------------------------------------------------------------------------------\
//Dashboard Get Route to go to a screen for just that post ofr updating and deleting
router.get('/:id', withAuth, async (req, res) => {
 
const singlePost = await Post.findOne({

where: {
    id: req.params.id
}
});

const editPost = await singlePost.get({ plain: true})



console.log(editPost)

res.render('editpost', {editPost, logged_in: req.session.logged_in});


});

 
//----------------------------------------------------------------------------------------\
//Dashboard PUT and DELETE Routes for when you click on a given post

router.put('/:id', (req, res) => {
//  console.log("you smacked the update route")
//   res.json("you smacked the update route")

Post.update(
req.body, {
where: {
      id: req.params.id
}
 });


});


router.delete('/:id', (req, res) => {
 
 Post.destroy({
    where: {
    id: req.params.id
    }
});

 console.log("you smacked the delete route")
// 	  res.json("you smacked the delete route")
});












  module.exports = router;
