async function addExpense(event) {
  event.preventDefault();

  const title = document.querySelector("#expense-name").value.trim();
  const cost = document.querySelector("#expense-cost").value.trim();
  const frequency = document.querySelector("#expense-frequency").value.trim();
  const user_id = document.querySelector("#user-id").textContent;
  const ele = document.getElementsByName("priority");

  let priority;
  let is_vital;

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      priority = ele[i].value;
    }
  }

  if (priority === "vital") {
    is_vital = true;
  } else {
    is_vital = false;
  }

  if (title && cost && frequency && priority) {
    const response = await fetch("/api/expense", {
      method: "POST",
      body: JSON.stringify({
        title,
        cost,
        frequency,
        is_vital,
        user_id,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      sessionStorage.setItem("currentTab", "Expenses");
      document.location.replace("/user");
    } else {
      alert(response.statusText);
    }
  }
}

async function deleteExpense(event) {
  event.preventDefault();

  const expenseId = event.target.getAttribute("data-id");

  const response = await fetch(`/api/expense/${expenseId}`, {
    method: "DELETE"
  })
 if(response.ok) {
   location.reload();
 } else {
    alert(response.statusText);
  }
};

document
  .querySelector(".addExpenseForm")
  .addEventListener("submit", addExpense);

document
  .querySelector('#expenses-list')
  .addEventListener('click', deleteExpense);
