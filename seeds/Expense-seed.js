const { Expense } = require('../models');

const expensedata = [
    {
        title: 'car',
        cost: 286,
        frequency: 'weekly',
        is_vital: false,
        user_id: 1
    },
    {
        title: 'car',
        cost: 199,
        frequency: 'once',
        is_vital: false,
        user_id: 1
    },
    {
        title: 'credit-cards',
        cost: 314,
        frequency: 'quarterly',
        is_vital: true,
        user_id: 1
    },
    {
        title: 'car',
        cost: 973,
        frequency: 'weekly',
        is_vital: true,
        user_id: 2
    },
    {
        title: 'car',
        cost: 760,
        frequency: 'weekly',
        is_vital: false,
        user_id: 2
    },
    {
        title: 'electric',
        cost: 694,
        frequency: 'once',
        is_vital: true,
        user_id: 2
    },
    {
        title: 'groceries',
        cost: 739,
        frequency: 'monthly',
        is_vital: true,
        user_id: 3
    },
    {
        title: 'electric',
        cost: 851,
        frequency: 'weekly',
        is_vital: true,
        user_id: 3
    },
    {
        title: 'car',
        cost: 162,
        frequency: 'once',
        is_vital: true,
        user_id: 3
    },
    {
        title: 'credit-cards',
        cost: 574,
        frequency: 'weekly',
        is_vital: true,
        user_id: 4
    },
    {
        title: 'groceries',
        cost: 79,
        frequency: 'weekly',
        is_vital: true,
        user_id: 4
    },
    {
        title: 'gas',
        cost: 655,
        frequency: 'monthly',
        is_vital: true,
        user_id: 4
    },
    {
        title: 'child-support',
        cost: 372,
        frequency: 'weekly',
        is_vital: false,
        user_id: 5
    },
    {
        title: 'credit-cards',
        cost: 219,
        frequency: 'quarterly',
        is_vital: true,
        user_id: 5
    },
    {
        title: 'child-support',
        cost: 389,
        frequency: 'quarterly',
        is_vital: true,
        user_id: 5
    },
    {
        title: 'gas',
        cost: 178,
        frequency: 'annually',
        is_vital: false,
        user_id: 6
    },
    {
        title: 'credit-cards',
        cost: 445,
        frequency: 'annually',
        is_vital: false,
        user_id: 6
    },
    {
        title: 'car',
        cost: 822,
        frequency: 'once',
        is_vital: true,
        user_id: 6
    },
    {
        title: 'electric',
        cost: 589,
        frequency: 'annually',
        is_vital: false,
        user_id: 7
    },
    {
        title: 'groceries',
        cost: 693,
        frequency: 'monthly',
        is_vital: true,
        user_id: 7
    },
    {
        title: 'groceries',
        cost: 665,
        frequency: 'weekly',
        is_vital: true,
        user_id: 7
    },
    {
        title: 'gas',
        cost: 836,
        frequency: 'once',
        is_vital: false,
        user_id: 8
    },
    {
        title: 'gas',
        cost: 315,
        frequency: 'monthly',
        is_vital: false,
        user_id: 8
    },
    {
        title: 'child-support',
        cost: 330,
        frequency: 'semi-annually',
        is_vital: true,
        user_id: 8
    },
    {
        title: 'gas',
        cost: 193,
        frequency: 'semi-annually',
        is_vital: false,
        user_id: 9
    },
    {
        title: 'car',
        cost: 751,
        frequency: 'weekly',
        is_vital: true,
        user_id: 9
    },
    {
        title: 'electric',
        cost: 888,
        frequency: 'annually',
        is_vital: false,
        user_id: 9
    },
    {
        title: 'gas',
        cost: 752,
        frequency: 'quarterly',
        is_vital: false,
        user_id: 10
    },
    {
        title: 'electric',
        cost: 131,
        frequency: 'semi-annually',
        is_vital: true,
        user_id: 10
    },
    {
        title: 'car',
        cost: 853,
        frequency: 'semi-annually',
        is_vital: true,
        user_id: 10
    }
];

const seedExpenses = () => Expense.bulkCreate(expensedata);

module.exports = seedExpenses;