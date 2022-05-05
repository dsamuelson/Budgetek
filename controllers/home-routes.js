const router = require('express').Router();
const res = require('express/lib/response');
const fs = require('fs');
const { User,  Income, Expense } = require('../models');

//Get all info for homepage if user is logged in
router.get('/user', async (req, res) => {
    try {
      //redirect to login page if user is not logged in
      console.log(req.session.loggedIn);
      if (!req.session.loggedIn) {
        res.redirect('/');
        return;
      }
      console.log('here1')
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
      console.log('here2')
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
      console.log(incomes);
  
      const expenses = expenseData.map((expense) =>
        expense.get({ plain: true })
      );
  
      //const user = userData.map((user) => user.get({ plain: true }));
      const user = userData.get({ plain: true });
  
      // Pass serialized data and session flag into template
      res.render('dashboard', {
        incomes,
        expenses,
        userId: req.session.user_id,
        loggedIn: req.session.loggedIn,
      });
      } 
      catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/', (req, res) => {
    console.log(req.session.loggedIn)
    if(req.session.loggedIn) {
      res.redirect('/user');
      return;
    }
    res.render('homepage');
  });

  router.get('/run-seeds', (req, res) => {
    const seedAll = require('../seeds/index');

    seedAll();
  });

  module.exports = router;
