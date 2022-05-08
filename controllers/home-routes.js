const router = require('express').Router()
const res = require('express/lib/response')
const fs = require('fs')
const { User, Income, Expense, Post, Comment } = require('../models')
const { sequelize } = require('../models/Income')

router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'post_content', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'post_id',
                    'user_id',
                    'created_at',
                ],
                include: {
                    model: User,
                    attributes: ['username'],
                },
            },
            {
                model: User,
                attributes: ['username'],
            },
        ],
    })
        // feed data from response into homepage template
        .then((dbPostData) => {
            const posts = dbPostData.map((post) => post.get({ plain: true }))

            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn,
            })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
})

// get single post
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id,
        },
        attributes: ['id', 'title', 'post_content', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'post_id',
                    'user_id',
                    'created_at',
                ],
                include: {
                    model: User,
                    attributes: ['username'],
                },
            },
            {
                model: User,
                attributes: ['username'],
            },
        ],
    })
        // feed data from response into single post template
        .then((dbPostData) => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' })
                return
            }

            const post = dbPostData.get({ plain: true })

            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn,
            })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
})

//Get all info for homepage if user is logged in
router.get('/user', async (req, res) => {
    try {
        //redirect to login page if user is not logged in
        console.log(req.session.loggedIn)
        if (!req.session.loggedIn) {
            res.redirect('/')
            return
        }
        // Get all posts
        const incomeData = await Income.findAll({
            where: {
                user_id: req.session.user_id,
            },
            attributes: [
                'id',
                'title',
                'pay',
                'frequency',
                [
                    sequelize.literal(
                        `(SELECT SUM(pay) FROM income WHERE income.user_id = ${req.session.user_id})`
                    ),
                    'total_pay',
                ],
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
        })
        // Get all expenses
        const expenseData = await Expense.findAll({
            where: {
                user_id: req.session.user_id,
            },
            attributes: [
                'id',
                'title',
                'cost',
                'frequency',
                [
                    sequelize.literal(
                        `(SELECT SUM(cost) FROM expense WHERE expense.user_id = ${req.session.user_id})`
                    ),
                    'total_bills',
                ],
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
        })

        //Get user data

        // Serialize data so the template can read it
        const incomes = incomeData.map((income) => income.get({ plain: true }))

        const expenses = expenseData.map((expense) =>
            expense.get({ plain: true })
        )

        var budgetDiff = 0

        if (incomes.length && expenses.length) {
            budgetDiff = incomes[0].total_pay - expenses[0].total_bills
        }
        // Pass serialized data and session flag into template

        res.render('dashboard', {
            incomes,
            expenses,
            budgetDiff,
            userId: req.session.user_id,
            loggedIn: req.session.loggedIn,
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/', (req, res) => {
    console.log(req.session.loggedIn)
    if (req.session.loggedIn) {
        res.redirect('/user')
        return
    }
    res.render('homepage')
})

router.get('/run-seeds', (req, res) => {
    const seedAll = require('../seeds/index')

    seedAll()
})

module.exports = router
