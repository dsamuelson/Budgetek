const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedExpenses = require('./Expense-seed');
const seedIncomes = require('./income-seed');

// used only for testing to seed the needed tables

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();

  console.log('--------------');
  await seedPosts();

  console.log('--------------');
  await seedComments();

  console.log('--------------');
  await seedExpenses();

  console.log('--------------');
  await seedIncomes();

  console.log('--------------');

  process.exit(0);
};

seedAll();