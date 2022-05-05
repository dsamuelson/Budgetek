const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const forumRoutes = require('./forum-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/forum-dash', forumRoutes)

module.exports = router;