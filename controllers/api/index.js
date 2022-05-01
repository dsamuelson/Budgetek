const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comments-routes');
const expenseRoutes = require('./expense-routes');
const incomeRoutes = require('./income-routes');

router.use('/comment', commentRoutes );
router.use('/expense', expenseRoutes );
router.use('/income', incomeRoutes);
router.use('/post', postRoutes);
router.use('/user', userRoutes);

module.exports = router;