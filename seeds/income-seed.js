const { Income } = require('../models');

const incomedata = [
    {
        title: 'Primary',
        pay: 757,
        frequency: 'weekly',
        is_primary: true,
        user_id: 1
    },
    {
        title: 'Secondary',
        pay: 929,
        frequency: 'weekly',
        is_primary: false,
        user_id: 1
    },
    {
        title: 'Primary',
        pay: 790,
        frequency: 'monthly',
        is_primary: true,
        user_id: 2
    },
    {
        title: 'Secondary',
        pay: 185,
        frequency: 'once',
        is_primary: false,
        user_id: 2
    },
    {
        title: 'Primary',
        pay: 199,
        frequency: 'weekly',
        is_primary: true,
        user_id: 3
    },
    {
        title: 'Secondary',
        pay: 391,
        frequency: 'once',
        is_primary: false,
        user_id: 3
    },
    {
        title: 'Primary',
        pay: 926,
        frequency: 'monthly',
        is_primary: true,
        user_id: 4
    },
    {
        title: 'Secondary',
        pay: 310,
        frequency: 'monthly',
        is_primary: false,
        user_id: 4
    },
    {
        title: 'Primary',
        pay: 341,
        frequency: 'semi-monthly',
        is_primary: true,
        user_id: 5
    },
    {
        title: 'Secondary',
        pay: 687,
        frequency: 'monthly',
        is_primary: false,
        user_id: 5
    },
    {
        title: 'Primary',
        pay: 141,
        frequency: 'weekly',
        is_primary: true,
        user_id: 6
    },
    {
        title: 'Secondary',
        pay: 947,
        frequency: 'weekly',
        is_primary: false,
        user_id: 6
    },
    {
        title: 'Primary',
        pay: 633,
        frequency: 'semi-monthly',
        is_primary: true,
        user_id: 7
    },
    {
        title: 'Secondary',
        pay: 663,
        frequency: 'monthly',
        is_primary: false,
        user_id: 7
    },
    {
        title: 'Primary',
        pay: 639,
        frequency: 'semi-monthly',
        is_primary: true,
        user_id: 8
    },
    {
        title: 'Secondary',
        pay: 158,
        frequency: 'monthly',
        is_primary: false,
        user_id: 8
    },
    {
        title: 'Primary',
        pay: 381,
        frequency: 'once',
        is_primary: true,
        user_id: 9
    },
    {
        title: 'Secondary',
        pay: 818,
        frequency: 'weekly',
        is_primary: false,
        user_id: 9
    },
    {
        title: 'Primary',
        pay: 710,
        frequency: 'semi-monthly',
        is_primary: true,
        user_id: 10
    },
    {
        title: 'Secondary',
        pay: 102,
        frequency: 'monthly',
        is_primary: false,
        user_id: 10
    }

];

const seedIncomes = () => Income.bulkCreate(incomedata);

module.exports = seedIncomes;