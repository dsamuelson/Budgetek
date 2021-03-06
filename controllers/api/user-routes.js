const router = require('express').Router()
const { User } = require('../../models')

//get a list of users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll()
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
})

//Create a new user
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        console.log(dbUserData)
        //set up session with loggedIn set to true
        req.session.save(() => {
            req.session.user_id = dbUserData.id
            req.session.loggedIn = true

            res.status(200).json(dbUserData)
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// Login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        })

        if (!dbUserData) {
            res.status(400).json({
                message: 'Incorrect email or password. Please try again!',
            })
            return
        }

        const validPassword = await dbUserData.checkPassword(req.body.password)

        if (!validPassword) {
            res.status(400).json({
                message: 'Incorrect email or password. Please try again!',
            })
            return
        }
        console.log(dbUserData)
        req.session.save(() => {
            req.session.user_id = dbUserData.id
            req.session.loggedIn = true

            res.status(200).json({
                user: dbUserData,
                message: 'Now logging in!',
            })
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//Logout

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    } else {
        res.status(404).end()
    }
})

module.exports = router
