const router = require('express').Router();

// Importing the individual route files
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');

// Using the routes
router.use('/blogs', blogRoutes); // No /api here
router.use('/comments', commentRoutes); // No /api here
router.use('/users', userRoutes); // No /api here

module.exports = router;
