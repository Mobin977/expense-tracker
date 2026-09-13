// ======================================
// Expense Tracker - JavaScript
// ======================================

// Get elements from HTML
const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseCategoryInput = document.getElementById("expense-category");
const expenseDateInput = document.getElementById("expense-date");

const expenseList = document.getElementById("expense-list");
const totalExpensesElement = document.getElementById("total-expenses");
const emptyMessage = document.getElementById("empty-message");


// ======================================
// Load Expenses from LocalStorage
// ======================================

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];


// ======================================
// Set Today's Date
// ======================================

const today = new Date().toISOString().split("T")[0];

expenseDateInput.value = today;


// ======================================
// Save Expenses to LocalStorage
// ======================================

function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}


// ======================================
// Calculate Total Expenses
// ======================================

function updateTotal() {
    const total = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    totalExpensesElement.textContent = `₹${total.toFixed(2)}`;
}


// ======================================
// Display Expenses
// ======================================

function displayExpenses() {

    // Clear current list
    expenseList.innerHTML = "";

    // Show empty message if there are no expenses
    if (expenses.length === 0) {

        const message = document.createElement("p");

        message.id = "empty-message";
        message.textContent = "No expenses added yet.";

        expenseList.appendChild(message);

        updateTotal();

        return;
    }


    // Display every expense
    expenses.forEach((expense) => {

        const expenseItem = document.createElement("div");

        expenseItem.className = "expense-item";

        expenseItem.innerHTML = `
            <div class="expense-info">

                <h3>${expense.name}</h3>

                <div class="expense-details">

                    <span class="expense-category">
                        ${expense.category}
                    </span>

                    <span>
                        ${formatDate(expense.date)}
                    </span>

                </div>

            </div>

            <div class="expense-amount">
                ₹${expense.amount.toFixed(2)}
            </div>

            <button
                class="delete-btn"
                onclick="deleteExpense(${expense.id})"
            >
                Delete
            </button>
        `;

        expenseList.appendChild(expenseItem);
    });


    // Update total
    updateTotal();
}


// ======================================
// Format Date
// ======================================

function formatDate(dateString) {

    const date = new Date(dateString + "T00:00:00");

    return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}


// ======================================
// Add New Expense
// ======================================

expenseForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Get values
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);
    const category = expenseCategoryInput.value;
    const date = expenseDateInput.value;


    // Validate inputs
    if (!name) {
        alert("Please enter an expense name.");
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    if (!category) {
        alert("Please select a category.");
        return;
    }

    if (!date) {
        alert("Please select a date.");
        return;
    }


    // Create expense object
    const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
        category: category,
        date: date
    };


    // Add expense to array
    expenses.push(newExpense);


    // Save to LocalStorage
    saveExpenses();


    // Display updated expenses
    displayExpenses();


    // Clear form
    expenseForm.reset();


    // Set today's date again
    expenseDateInput.value = today;
});


// ======================================
// Delete Expense
// ======================================

function deleteExpense(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this expense?"
    );

    if (!confirmDelete) {
        return;
    }


    // Remove expense
    expenses = expenses.filter((expense) => {
        return expense.id !== id;
    });


    // Save updated array
    saveExpenses();


    // Refresh display
    displayExpenses();
}


// ======================================
// Initial Display
// ======================================

displayExpenses();