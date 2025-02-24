let expenses = [];

function addExpense() {
    const name = document.getElementById('expenseName').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    
    if (name && !isNaN(amount)) {
        const expense = { name, amount };
        expenses.push(expense);
        updateExpenses();
    } else {
        alert("Please enter valid expense name and amount.");
    }

    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
}

function updateExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';

    let totalAmount = 0;

    expenses.forEach((expense, index) => {
        totalAmount += expense.amount;
        const li = document.createElement('li');
        li.innerHTML = `${expense.name} - $${expense.amount.toFixed(2)} <button onclick="deleteExpense(${index})">X</button>`;
        expenseList.appendChild(li);
    });

    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateExpenses();
}
