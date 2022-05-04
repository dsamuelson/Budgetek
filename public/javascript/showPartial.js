function expensesClick(event) {
    event.preventDefault();
    document.getElementById('expenses').hidden = false;
    document.getElementById('incomes').hidden = true;
};

function incomesClick(event) {
    event.preventDefault();
    document.getElementById('incomes').hidden = false;
    document.getElementById('expenses').hidden = true;
};

document
  .querySelector("#showExpense")
  .addEventListener("click", expensesClick);
document
  .querySelector("#showIncome")
  .addEventListener("click", incomesClick);