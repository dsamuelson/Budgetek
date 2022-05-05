const router = require('express').Router();
const res = require('express/lib/response');
const fs = require('fs');
const { User,  Income, Expense } = require('../models');
const { sequelize } = require('../models/Income');

//Get all info for homepage if user is logged in
router.get('/user', async (req, res) => {
    try {
      //redirect to login page if user is not logged in
      console.log(req.session.loggedIn);
      if (!req.session.loggedIn) {
        res.redirect('/');
        return;
      }
      // Get all posts
      const incomeData = await Income.findAll({
        where: {
          user_id: req.session.user_id
        },
        attributes: [
          'id',
          'pay',
          'frequency',
          [sequelize.literal(`(SELECT SUM(pay) FROM income WHERE income.user_id = ${req.session.user_id})`), 'total_pay']
        ],
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
      // Get all expenses
      const expenseData = await Expense.findAll({
        where: {
          user_id: req.session.user_id
        },
        attributes: [
          'id',
          'title',
          'cost',
          'frequency',
          [sequelize.literal(`(SELECT SUM(cost) FROM expense WHERE expense.user_id = ${req.session.user_id})`), 'total_bills']
        ],
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

      const budgetDiff = incomes[0].total_pay - expenses[0].total_bills;
  
      //const user = userData.map((user) => user.get({ plain: true }));
      const user = userData.get({ plain: true });
      console.log(incomes[0].total_pay)
      // Pass serialized data and session flag into template
      res.render('dashboard', {
        incomes,
        expenses,
        budgetDiff,
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
