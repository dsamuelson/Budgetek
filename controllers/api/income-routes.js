const router = require('express').Router()
const { Income } = require('../../models')

// Get all Incomes
router.get('/', async (req, res) => {
    try {
        const incomeData = await Income.findAll()
        res.status(200).json(incomeData)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Get one income
router.get('/:id', async (req, res) => {
    try {
        const incomeData = await Income.findByPk(req.params.id, {
            where: {
                id: req.params.id,
            },
        })

        if (!incomeData) {
            res.status(404).json({ message: 'No income found with this id!' })
            return
        }
        res.status(200).json(incomeData)
    } catch (err) {
        res.status(500).json(err)
    }
})

// post a new income
router.post('/', async (req, res) => {
    try {
        const newIncomeData = await Income.create(req.body)
        res.status(200).json(newIncomeData)
    } catch (err) {
        res.status(400).json(err)
    }
})

//UPDATE an income.
router.put('/:id', async (req, res) => {
    // update a income by its `id` value
    try {
        const newIncomeData = await Income.update(req.body, {
            where: { id: req.params.id },
        })
        res.status(200).json(newIncomeData)
    } catch (err) {
        res.status(400).json(err)
    }
})

//DELETE a income by id.
router.delete('/:id', async (req, res) => {
    Income.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((incomeData) => {
            if (!incomeData) {
                res.status(404).json({
                    message: 'No income found with this id!',
                })
                return
            }
            res.status(200).json(incomeData)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
})

module.exports = router
