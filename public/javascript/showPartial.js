const currentTab = localStorage.getItem('currentTab');
const expenses = document.getElementById('expenses');
const incomes = document.getElementById('incomes');

if(currentTab === 'Expenses') {
  expenses.hidden = false;
  incomes.hidden = true;
} else {
  expenses.hidden = true;
  incomes.hidden = false;
}

function expensesClick(event) {
    event.preventDefault();
    expenses.hidden = false;
    incomes.hidden = true;
    localStorage.setItem('currentTab', 'Expenses');
};

function incomesClick(event) {
    event.preventDefault();
    incomes.hidden = false;
    expenses.hidden = true;
    localStorage.setItem('currentTab', 'Income');
};

document
  .querySelector("#showExpense")
  .addEventListener("click", expensesClick);
document
  .querySelector("#showIncome")
  .addEventListener("click", incomesClick);