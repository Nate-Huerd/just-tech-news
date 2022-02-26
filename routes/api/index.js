const router = require('express').Router();

const { route } = require('./post-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
