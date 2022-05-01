const router = require('express').Router();
const { Expense } = require('../../models');

// Get all expenses
router.get('/', async( req, res) => {
    try {
        const expenseData = await Expense.findAll();
        res.status(200).json(expenseData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// Get one expense
router.get('/:id',async (req, res) => {
    try {
        const expenseData = await expense.findByPk(req.params.id, {
            where: {
                id: req.params.id,
            }
        });

        if (!expenseData) {
            res.status(404).json({ message: 'No expense found with this id!' });
            return;
        }
        res.status(200).json(expenseData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// post a new expense
router.post('/', async (req, res) => {
    try {
      const newExpenseData = await Expense.create(req.body);
      res.status(200).json(newExpenseData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  //UPDATE an expense.
  router.put('/:id', async (req, res) => {
    // update a category by its `id` value
    try {
      const newExpenseData = await Transaction.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(200).json(newExpenseData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  //DELETE a expense by id. 
  router.delete('/:id', async (req, res) => {
    try {
      const selectedExpense = await Expense.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!ExpenseData) {
        res.status(404).json({ message: 'No Expense found with this id!' });
        return;
      }
      res.status(200).json(selectedExpense);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;