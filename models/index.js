const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'   // Added cascade delete
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'   // Added cascade delete
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'   // Added cascade delete for comments when a post is deleted
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = {
    User,
    Post,
    Comment
};
