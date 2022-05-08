const router = require('express').Router()
const sequelize = require('../config/connection')
const { Post, User, Comment } = require('../models')

// get all posts for user when logged in to dashboard

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
        //feed the data recieved into the dashboard template
        .then((dbPostData) => {
            const posts = dbPostData.map((post) => post.get({ plain: true }))
            res.render('forum-home', { posts, loggedIn: req.session.loggedIn })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/dashboard', (req, res) => {
    Post.findAll({
        where: {
            user_id: 1,
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
        //feed the data recieved into the dashboard template
        .then((dbPostData) => {
            const posts = dbPostData.map((post) => post.get({ plain: true }))
            res.render('forum-dash', { posts, loggedIn: req.session.loggedIn })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
})

// open the new post template page

router.get('/new-post', (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/')
    }
    res.render('new-post', { loggedIn: req.session.loggedIn })
})

// edit specific post by user route

router.get('/edit/:id', (req, res) => {
    Post.findByPk(req.params.id, {
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
        // feed data from response into edit-post template
        .then((dbPostData) => {
            if (dbPostData) {
                const post = dbPostData.get({ plain: true })

                res.render('edit-post', {
                    post,
                    loggedIn: true,
                })
            } else {
                res.status(404).end()
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        })
})

module.exports = router
