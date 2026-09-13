# 💰 Expense Tracker

A responsive **Expense Tracker web application** built using **HTML5, CSS3, and JavaScript** that allows users to add, manage, delete, and track their daily expenses.

The application uses **LocalStorage** to save expense data directly in the browser, so expenses remain available even after refreshing or reopening the page.

---

## 🚀 Live Demo

**Live Website:**

https://mobin977.github.io/expense-tracker/

---

## 📂 GitHub Repository

https://github.com/Mobin977/expense-tracker

---

## ✨ Features

- ➕ Add new expenses
- 💰 Enter expense amount
- 🏷️ Select expense category
- 📅 Select expense date
- 📋 View expense history
- 🗑️ Delete expenses
- 🧮 Automatically calculate total expenses
- 💾 Store expenses using LocalStorage
- 🔄 Data persists after page refresh
- ✅ Form validation
- 📱 Fully responsive design
- 🌐 Indian Rupee (₹) currency formatting
- 🎨 Clean and modern user interface

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript (ES6+)

### Browser Storage

- LocalStorage API

### Development Tools

- Visual Studio Code
- Git
- GitHub
- GitHub Pages

---

# 📁 Project Structure

```text
expense-tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# 🖥️ Application Overview

The Expense Tracker contains three main sections:

1. **Total Expenses**
2. **Add Expense Form**
3. **Expense History**

```text
--------------------------------------------------
                 EXPENSE TRACKER
             Track your daily expenses
--------------------------------------------------

                 Total Expenses
                    ₹0.00

--------------------------------------------------
                  Add Expense
--------------------------------------------------

Expense Name       Amount
[ Grocery ]        [ 500 ]

Category           Date
[ Food ▼ ]         [ Date ]

              [ Add Expense ]

--------------------------------------------------
                 Expense History
--------------------------------------------------

Grocery        Food     13 Sep 2026     ₹500.00
Transport      Transport 13 Sep 2026     ₹100.00

              [ Delete ]
--------------------------------------------------
```

---

# 💰 Total Expenses

The application automatically calculates the total amount of all expenses.

For example:

```text
Grocery      ₹500
Transport    ₹100
Shopping     ₹300

Total        ₹900
```

The total is calculated dynamically whenever an expense is added or deleted.

---

# ➕ Adding an Expense

Users can enter the following information:

| Field        | Description         |
| ------------ | ------------------- |
| Expense Name | Name of the expense |
| Amount       | Amount spent        |
| Category     | Expense category    |
| Date         | Date of the expense |

Example:

```text
Expense Name: Grocery
Amount: 500
Category: Food
Date: 13 Sep 2026
```

After clicking **Add Expense**, the expense is added to the expense history.

---

# 🏷️ Expense Categories

The application provides multiple categories:

- 🍔 Food
- 🛍️ Shopping
- 🚗 Transport
- 💡 Bills
- 🎬 Entertainment
- 📚 Education
- 🏥 Health
- 📦 Other

---

# 📋 Expense History

All added expenses are displayed in the **Expense History** section.

Each expense displays:

```text
Expense Name
Category
Date
Amount
Delete Button
```

Example:

```text
Grocery

Food
13 Sep 2026

₹500.00

[ Delete ]
```

---

# 🗑️ Delete Expense

Users can remove an expense by clicking the **Delete** button.

Before deleting, the application asks for confirmation:

```text
Are you sure you want to delete this expense?
```

If the user confirms, the expense is removed from:

- The user interface
- The JavaScript expense array
- LocalStorage

The total amount is also recalculated automatically.

---

# 💾 LocalStorage Integration

This project uses the browser's **LocalStorage API** to persist expense information.

Expenses are stored using:

```javascript
localStorage.setItem("expenses", JSON.stringify(expenses));
```

When the application starts, saved expenses are retrieved using:

```javascript
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
```

---

# 🔄 Data Flow

The application's data flow works like this:

```text
User enters expense
        ↓
Form validation
        ↓
Create expense object
        ↓
Add expense to array
        ↓
Save array to LocalStorage
        ↓
Update Expense History
        ↓
Calculate Total
```

---

# 📦 Expense Data Structure

Each expense is stored as a JavaScript object.

Example:

```javascript
{
    id: 1694600000000,
    name: "Grocery",
    amount: 500,
    category: "Food",
    date: "2026-09-13"
}
```

Multiple expenses are stored inside an array:

```javascript
[
  {
    id: 1,
    name: "Grocery",
    amount: 500,
    category: "Food",
    date: "2026-09-13",
  },
  {
    id: 2,
    name: "Bus",
    amount: 100,
    category: "Transport",
    date: "2026-09-13",
  },
];
```

---

# 🧮 Total Calculation

The total expense amount is calculated using JavaScript's `reduce()` method.

```javascript
const total = expenses.reduce((sum, expense) => {
  return sum + expense.amount;
}, 0);
```

The result is displayed using Indian Rupee formatting:

```javascript
totalExpensesElement.textContent = `₹${total.toFixed(2)}`;
```

Example:

```text
₹900.00
```

---

# ✅ Form Validation

The application validates user input before adding an expense.

### Expense Name

The name cannot be empty.

```javascript
if (!name) {
  alert("Please enter an expense name.");
  return;
}
```

### Amount

The amount must be greater than zero.

```javascript
if (isNaN(amount) || amount <= 0) {
  alert("Please enter a valid amount.");
  return;
}
```

### Category

A category must be selected.

```javascript
if (!category) {
  alert("Please select a category.");
  return;
}
```

### Date

A valid date must be selected.

```javascript
if (!date) {
  alert("Please select a date.");
  return;
}
```

---

# 📅 Date Formatting

Expense dates are displayed using the Indian locale.

```javascript
date.toLocaleDateString("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});
```

Example:

```text
13 Sep 2026
```

---

# 🧠 JavaScript Concepts Used

This project helped practice several important JavaScript concepts.

### DOM Manipulation

```javascript
document.getElementById();
```

### Event Handling

```javascript
expenseForm.addEventListener();
```

### Arrays

```javascript
expenses.push();
expenses.filter();
```

### Array Methods

```javascript
reduce();
forEach();
filter();
```

### Objects

```javascript
const newExpense = {
  id,
  name,
  amount,
  category,
  date,
};
```

### LocalStorage

```javascript
localStorage.setItem();
localStorage.getItem();
```

### JSON

```javascript
JSON.stringify();
JSON.parse();
```

### Template Literals

```javascript
`₹${expense.amount.toFixed(2)}`;
```

### Functions

```javascript
function saveExpenses() {}
function updateTotal() {}
function displayExpenses() {}
function deleteExpense() {}
```

---

# 🔐 Data Persistence

One of the main features of this project is data persistence.

Without LocalStorage:

```text
Add Expense
     ↓
Refresh Page
     ↓
Data Lost
```

With LocalStorage:

```text
Add Expense
     ↓
Save to LocalStorage
     ↓
Refresh Page
     ↓
Retrieve Data
     ↓
Expenses Still Available
```

The data is stored locally in the user's browser.

---

# 📱 Responsive Design

The application is designed to work across different screen sizes.

Supported devices include:

- 💻 Desktop
- 💻 Laptop
- 📱 Mobile
- 📱 Tablet

CSS media queries are used to adjust the layout.

```css
@media (max-width: 700px) {
  #expense-form {
    grid-template-columns: 1fr;
  }
}
```

On smaller screens, the two-column form changes into a single-column layout.

---

# 🎨 User Interface

The application uses:

- Clean card-based layout
- Responsive form
- Rounded corners
- Simple color scheme
- Expense category badges
- Delete buttons
- Mobile-friendly layout
- Clear typography

---

# 🖼️ Screenshots

Add screenshots of your application here after taking them.

Example:

```text
screenshots/
│
├── expense-tracker-home.png
├── add-expense.png
├── expense-history.png
└── mobile-view.png
```

You can then add them to this README using:

```markdown
![Expense Tracker Home](screenshots/expense-tracker-home.png)
```

---

# ⚙️ How to Run Locally

## 1. Clone the Repository

```bash
git clone https://github.com/Mobin977/expense-tracker.git
```

## 2. Open the Project

```bash
cd expense-tracker
```

## 3. Open `index.html`

You can open `index.html` directly in your browser.

Or use the **Live Server** extension in Visual Studio Code.

---

# 🌐 Deployment

This project can be deployed using **GitHub Pages**.

Deployment structure:

```text
GitHub Repository
       ↓
GitHub Pages
       ↓
index.html
       ↓
Live Website
```

The project uses:

```text
Branch: main
Folder: / (root)
```

---

# 📚 What I Learned

While building this project, I practiced:

- HTML form creation
- CSS responsive layouts
- JavaScript DOM manipulation
- JavaScript event handling
- Array methods
- Objects and arrays
- LocalStorage
- JSON serialization
- Form validation
- Dynamic HTML rendering
- Date formatting
- Responsive web design
- Git and GitHub
- GitHub Pages deployment

---

# 🚀 Future Improvements

Possible future improvements include:

- 📊 Expense charts
- 🔎 Search expenses
- 🔽 Filter by category
- 📅 Filter by date
- ✏️ Edit expenses
- 📈 Monthly expense reports
- 📊 Category-wise spending analysis
- 🌙 Dark mode
- 📤 Export expenses to CSV
- 📥 Import expenses
- 💰 Monthly budget tracking
- 🔔 Budget alerts
- 📱 Progressive Web App support
- ☁️ Cloud database integration
- 👤 User authentication

---

# 🎯 Project Goals

The main goals of this project were to:

1. Practice JavaScript fundamentals.
2. Understand DOM manipulation.
3. Work with JavaScript arrays and objects.
4. Learn LocalStorage.
5. Build a responsive application.
6. Practice form validation.
7. Implement CRUD-like operations on client-side data.
8. Deploy a project using GitHub Pages.
9. Build a practical real-world application.

---

# 📌 Project Status

```text
Project: Expense Tracker
Status: Completed ✅
Frontend: HTML + CSS + JavaScript
Storage: LocalStorage
Responsive: Yes
Deployment: GitHub Pages
```

---

# 👨‍💻 Author

**Shaik Mobin**

Computer Science / MCA Student
Full-Stack Developer

### GitHub

https://github.com/Mobin977

### LinkedIn

https://www.linkedin.com/in/mobin-shaik-65900541/

---

# 🤝 Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

# 📄 License

This project is created for **learning and portfolio purposes**.

You are free to study, modify, and improve the project.
