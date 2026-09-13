# Expense Tracker 💰

A responsive expense tracking application built with **HTML, CSS, and JavaScript** that allows users to add, view, calculate, and delete their daily expenses. Expense data is stored in the browser using **LocalStorage**, so expenses remain available even after refreshing the page.

---

## 🚀 Live Demo

**Live Website:**

```text
https://mobin977.github.io/expense-tracker/
```

---

## 📂 GitHub Repository

**GitHub:**

https://github.com/Mobin977/expense-tracker

---

## ✨ Features

* ➕ Add new expenses
* 📝 Enter expense name
* 💰 Enter expense amount
* 🏷️ Select expense category
* 📅 Select expense date
* 📊 Automatically calculate total expenses
* 🗑️ Delete individual expenses
* ⚠️ Delete confirmation
* 💾 Store expenses using LocalStorage
* 🔄 Persist data after page refresh
* 🧮 Automatic total calculation
* 📋 Expense history
* ⚠️ Form validation
* 🕐 Automatically select today's date
* 🇮🇳 Indian Rupee currency display
* 📱 Responsive design
* 🌐 Runs completely in the browser
* 🚫 No backend required
* 🔐 No user account required

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6+)

### Browser APIs

* LocalStorage API
* DOM API

### Tools

* VS Code
* Git
* GitHub
* Browser Developer Tools
* GitHub Pages

---

## 💾 LocalStorage Integration

This project uses the browser's **LocalStorage API** to save expense information.

Unlike a traditional application that requires a backend database, this project stores the data directly inside the user's browser.

### Saving Data

When an expense is added, the expense array is converted into JSON and stored in LocalStorage.

```javascript
localStorage.setItem("expenses", JSON.stringify(expenses));
```

### Retrieving Data

When the application starts, previously saved expenses are retrieved:

```javascript
JSON.parse(localStorage.getItem("expenses")) || [];
```

### Data Flow

```text
User adds expense
        ↓
JavaScript creates expense object
        ↓
Expense added to array
        ↓
Array converted to JSON
        ↓
Saved in LocalStorage
        ↓
Expense displayed on screen
```

---

## 📁 Project Structure

```text
expense-tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🖥️ Application Flow

```text
User enters expense details
        ↓
JavaScript receives form data
        ↓
Input validation
        ↓
Expense object created
        ↓
Expense added to array
        ↓
Data saved to LocalStorage
        ↓
Expense displayed
        ↓
Total amount updated
```

---

## 💰 Expense Information

Each expense contains the following information:

| Information  | Description                        |
| ------------ | ---------------------------------- |
| Expense Name | Name or description of the expense |
| Amount       | Amount spent                       |
| Category     | Type of expense                    |
| Date         | Date when the expense occurred     |
| ID           | Unique identifier for the expense  |

Example expense object:

```javascript
{
    id: 123456789,
    name: "Grocery",
    amount: 500,
    category: "Food",
    date: "2026-09-13"
}
```

---

## 🏷️ Expense Categories

The application provides several predefined categories:

```text
Food
Shopping
Transport
Bills
Entertainment
Education
Health
Other
```

Users can select the appropriate category while adding an expense.

---

## ➕ Adding an Expense

The user enters:

```text
Expense Name
Amount
Category
Date
```

Example:

```text
Expense Name: Grocery
Amount: ₹500
Category: Food
Date: 13 Sep 2026
```

After clicking:

```text
Add Expense
```

The application:

```text
Validates the input
        ↓
Creates expense object
        ↓
Adds expense to array
        ↓
Saves to LocalStorage
        ↓
Updates expense history
        ↓
Updates total amount
```

---

## 🗑️ Deleting an Expense

Each expense has a **Delete** button.

When the user clicks Delete:

```text
Delete button
      ↓
Confirmation message
      ↓
User confirms
      ↓
Expense removed from array
      ↓
LocalStorage updated
      ↓
Expense list refreshed
      ↓
Total recalculated
```

The application asks for confirmation before permanently removing an expense.

---

## 📊 Total Expense Calculation

The total expense is calculated using JavaScript's `reduce()` method.

```javascript
const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
}, 0);
```

The total is automatically updated whenever:

* A new expense is added
* An expense is deleted
* The application loads

Example:

```text
Grocery       ₹500
Transport     ₹100
Food          ₹250
-------------------
Total         ₹850
```

---

## 🧠 JavaScript Concepts Practiced

This project demonstrates several important JavaScript concepts:

* DOM manipulation
* Event listeners
* Functions
* Arrays
* Objects
* Array methods
* `reduce()`
* `filter()`
* `forEach()`
* Template literals
* Form handling
* Input validation
* JSON
* LocalStorage
* `JSON.stringify()`
* `JSON.parse()`
* Dynamic HTML generation
* Conditional statements
* Date handling
* Number conversion
* Browser APIs

---

## 🔄 Expense Data Flow

```text
HTML Form
    ↓
JavaScript Event Listener
    ↓
Input Validation
    ↓
Expense Object
    ↓
JavaScript Array
    ↓
LocalStorage
    ↓
DOM Rendering
    ↓
Expense History
```

---

## 💾 Data Persistence

One of the main features of this project is data persistence.

Without LocalStorage:

```text
Add Expense
     ↓
Refresh Browser
     ↓
Data Lost ❌
```

With LocalStorage:

```text
Add Expense
     ↓
Save to LocalStorage
     ↓
Refresh Browser
     ↓
Load Saved Expenses
     ↓
Data Available ✅
```

---

## ⚠️ Form Validation

The application validates user input before adding an expense.

### Expense Name

The application checks that the expense name is not empty.

```text
Please enter an expense name.
```

### Amount

The application checks that the amount is a valid positive number.

```text
Please enter a valid amount.
```

### Category

The application checks that a category has been selected.

```text
Please select a category.
```

### Date

The application checks that a date has been selected.

```text
Please select a date.
```

---

## 📱 Responsive Design

The application is designed to work across different screen sizes.

### Supported Devices

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

CSS media queries are used to adapt the expense form and expense list for smaller screens.

---

## 🎨 User Interface

The application contains:

```text
┌─────────────────────────────────┐
│         Expense Tracker          │
│     Track your daily expenses    │
│                                 │
│        Total Expenses           │
│           ₹850.00               │
│                                 │
├─────────────────────────────────┤
│          Add Expense             │
│                                 │
│ Expense Name    Amount           │
│ [ Grocery ]     [ 500 ]         │
│                                 │
│ Category        Date             │
│ [ Food ▼ ]      [ Date ]        │
│                                 │
│        [ Add Expense ]           │
│                                 │
├─────────────────────────────────┤
│        Expense History           │
│                                 │
│ Grocery          ₹500            │
│ Food • 13 Sep 2026               │
│                     [Delete]      │
│                                 │
│ Transport        ₹100            │
│ Transport • 13 Sep 2026          │
│                     [Delete]      │
└─────────────────────────────────┘
```

---

## 📸 Screenshots

Screenshots can be added to the project.

Recommended screenshots:

```text
assets/
│
├── expense-tracker-desktop.png
├── expense-tracker-mobile.png
├── expense-tracker-form.png
└── expense-tracker-history.png
```

After adding screenshots, they can be displayed in this README using:

```markdown
## 📸 Screenshots

### Desktop

![Expense Tracker Desktop](./assets/expense-tracker-desktop.png)

### Mobile

![Expense Tracker Mobile](./assets/expense-tracker-mobile.png)

### Add Expense

![Add Expense](./assets/expense-tracker-form.png)

### Expense History

![Expense History](./assets/expense-tracker-history.png)
```

---

## 🚀 Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Mobin977/expense-tracker.git
```

### 2. Open the Project

```bash
cd expense-tracker
```

### 3. Open in VS Code

```bash
code .
```

### 4. Run the Application

You can open:

```text
index.html
```

directly in your browser.

For development, **VS Code Live Server** is recommended.

---

## 🌐 Deployment

This project can be deployed using **GitHub Pages**.

### GitHub Pages Settings

```text
Repository
    ↓
Settings
    ↓
Pages
    ↓
Deploy from a branch
    ↓
main
    ↓
/ (root)
    ↓
Save
```

After deployment, the application can be accessed through:

```text
https://mobin977.github.io/expense-tracker/
```

---

## 📚 What I Learned

By building this project, I learned how to create a browser-based expense management application using vanilla JavaScript.

The major learning areas were:

* Working with the DOM
* Handling HTML forms
* Creating dynamic elements
* Managing arrays and objects
* Using JavaScript array methods
* Calculating totals with `reduce()`
* Removing data with `filter()`
* Persisting application data
* Using LocalStorage
* Converting objects to JSON
* Parsing JSON data
* Handling dates
* Validating user input
* Creating responsive layouts
* Building a real-world frontend application

---

## 🔮 Future Improvements

Possible future improvements include:

* 📊 Expense charts
* 🔍 Search expenses
* 🏷️ Category filtering
* 📅 Monthly expense reports
* 📈 Spending analytics
* ✏️ Edit existing expenses
* 🗓️ Filter by date
* 🌙 Dark mode
* 📤 Export expenses to CSV
* 📥 Import expenses from CSV
* 💱 Multiple currencies
* 🎯 Monthly spending limits
* 🔔 Budget notifications
* 📱 Progressive Web App support
* ☁️ Cloud database synchronization
* 👤 User authentication

---

## 🎯 Project Goals

The purpose of this project was to practice:

```text
HTML
  ↓
CSS
  ↓
JavaScript
  ↓
DOM Manipulation
  ↓
Form Handling
  ↓
LocalStorage
  ↓
Dynamic UI
  ↓
Responsive Web Application
```

---

## 📊 Project Status

**Status:** ✅ Completed

### Completed Features

* ✅ HTML structure
* ✅ Responsive CSS
* ✅ Expense form
* ✅ Expense name
* ✅ Expense amount
* ✅ Expense category
* ✅ Expense date
* ✅ Add expense
* ✅ Display expenses
* ✅ Total expense calculation
* ✅ Delete expense
* ✅ Delete confirmation
* ✅ LocalStorage integration
* ✅ Data persistence
* ✅ Form validation
* ✅ Date formatting
* ✅ Responsive design
* ✅ Indian Rupee currency display

---

## 👨‍💻 Author

**Shaik Mobin**

GitHub:

https://github.com/Mobin977

LinkedIn:

https://www.linkedin.com/in/mobin-shaik-65900541/

---

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is open source and available for learning and educational purposes.
