async function addIncome(event) {
  event.preventDefault();

  const title = document.querySelector("#income-name").value.trim();
  const pay = document.querySelector("#income-pay").value.trim();
  const frequency = document.querySelector("#income-frequency").value.trim();
  const user_id = document.querySelector("#user-id").textContent;
  const ele = document.getElementsByName("priority");
  let priority;
  let is_primary;

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      priority = ele[i].value;
    }
  }

  if (priority === "Primary") {
    is_primary = true;
  } else {
    is_primary = false;
  }

  if (title && pay && frequency && priority) {
    const response = await fetch("/api/income", {
      method: "POST",
      body: JSON.stringify({
        title,
        pay,
        frequency,
        is_primary,
        user_id,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      sessionStorage.setItem("currentTab", "Income");
      document.location.replace("/user");
    } else {
      alert(response.statusText);
    }
  }
}

async function deleteIncome(event) {
  event.preventDefault();

  const incomeId = event.target.getAttribute("data-id");

  const response = await fetch(`/api/income/${incomeId}`, {
    method: "DELETE"
  })
 if(response.ok) {
   location.reload();
 } else {
    alert(response.statusText);
  }
};

document.querySelector(".addIncomeForm").addEventListener("submit", addIncome);

document.querySelector('#delete-income').addEventListener('click', deleteIncome);
