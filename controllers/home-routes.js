const router = require('express').Router();
const res = require('express/lib/response');
const { User,  Income, Expense } = require('../models');

//Get all info for homepage if user is logged in
router.get('/user', async (req, res) => {
    try {
      //redirect to login page if user is not logged in
      console.log(req.session.logged_in);
      if (!req.session.logged_in) {
        res.redirect('/');
        return;
      }
  
      // Get all posts
      const incomeData = await Income.findAll({
        include: [
          {
            model: User,
            attributes: ['id'],
            where: {
              id: req.session.user_id, //only get incomes that match user_id
            },
          },
        ],
      });
      console.log(incomeData);

      // Get all expenses
      const expenseData = await Expense.findAll({
        include: [
          {
            model: User,
            attributes: ['id'],
            where: {
              id: req.session.user_id, //only get expenses that match user_id
            },
          },
        ],
      });
  
      //Get user data
      const userData = await User.findByPk(req.session.user_id);
      console.log('THE USER DATA: ' + userData);
      console.log(typeof userData);
  
      // Serialize data so the template can read it
      const incomes = incomeData.map((income) => income.get({ plain: true }));
  
      const expenses = expenseData.map((expense) =>
        expense.get({ plain: true })
      );
  
      //const user = userData.map((user) => user.get({ plain: true }));
      const user = userData.get({ plain: true });
  
      // Pass serialized data and session flag into template
      res.render('homepage', {
        incomes,
        expenses,
        user,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/', (req, res) => {
    if(req.session.logged_in) {
      res.redirect('/user');
      return;
    }
    res.render('login');
  });

  router.get('/signup', async (req, res) => {
    res.render('signup');
  });

  

  module.exports = router;
