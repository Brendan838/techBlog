const User = require('./User');
const Post = require('./Post');
const Post = require('./Comment');


User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post};