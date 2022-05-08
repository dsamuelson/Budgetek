const currentTab = sessionStorage.getItem('currentTab');
const expenses = document.getElementById('expenses');
const incomes = document.getElementById('incomes');

if (expenses && incomes){
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

if (document.querySelector('#showExpense')){
  document
  .querySelector("#showExpense")
  .addEventListener("click", expensesClick);
}
if (document.querySelector('#showIncome')) {
  document
  .querySelector("#showIncome")
  .addEventListener("click", incomesClick);
}
if (document.querySelector('#gotoForum')) {
  document
  .querySelector('#gotoForum')
  .addEventListener('click', ()=> {
    location.replace('/forum')
  });
}

if (document.querySelector('#gotodashboard')){
  document
  .querySelector('#gotodashboard')
  .addEventListener('click', () => {
    location.replace('/user')
  });
}

if (document.querySelector('#gotoForumDash')) {
  document
    .querySelector('#gotoForumDash')
    .addEventListener('click', () => {
      location.replace('/forum/dashboard')
    })
}
