const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const postData = require('./postData.json');
const commentData = require('./commentData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const seededPosts = [];
  for (const post of postData) {
    const createdPost = await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
    seededPosts.push(createdPost.id);
  }
  console.log("Seeded Post IDs:", seededPosts);

  // Assuming each comment in commentData has a valid post ID and user ID
  const comments = await Comment.bulkCreate(commentData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
