const { Post } = require('../models');

const postData = [
  {
    title: "Don't Forget!",
    post_body: "Remember guys, there are 10 types of programmers. Those who understand Binary, and those who don't.",
    user_id: 1,
    username: "coderNewb"
  },
  {
    title: "Definition of Programmer",
    post_body: "A Machine that turns coffee into code",
    user_id: 2,
    username: "chatBob"
  },
  {
    title: "What do you call a programmer from Finland?",
  	post_body: "Nerdic",
    user_id: 3,
    username: "swedeGal222"
  }
];

const seedPost = () => Post.bulkCreate(postData);


module.exports = seedPost;

