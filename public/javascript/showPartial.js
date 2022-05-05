const currentTab = sessionStorage.getItem('currentTab');
const expenses = document.getElementById('expenses');
const incomes = document.getElementById('incomes');


if(currentTab === 'Expenses') {
  expenses.hidden = false;
  incomes.hidden = true;
} else if(currentTab === 'Income'){
  expenses.hidden = true;
  incomes.hidden = false;
} else {
  expenses.hidden = false;
  incomes.hidden = true;
}

function expensesClick(event) {
    event.preventDefault();
    expenses.hidden = false;
    incomes.hidden = true;
    sessionStorage.setItem('currentTab', 'Expenses');
};

function incomesClick(event) {
    event.preventDefault();
    incomes.hidden = false;
    expenses.hidden = true;
    sessionStorage.setItem('currentTab', 'Income');
};

document
  .querySelector("#showExpense")
  .addEventListener("click", expensesClick);
document
  .querySelector("#showIncome")
  .addEventListener("click", incomesClick);

document
  .querySelector('#gotoForum')
  .addEventListener('click', ()=> {
    location.replace('/forum-dash')
  })