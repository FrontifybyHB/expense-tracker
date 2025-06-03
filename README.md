# Expense Tracker (React + Redux Toolkit)

A modern, responsive Expense Tracker application built with React, Redux Toolkit, and Bootstrap. Easily manage your monthly salary, add and categorize expenses, and visualize your spending with filters and summaries.

---

## Features

- **Set Monthly Salary:** Input and update your monthly income.
- **Add Expenses:** Log expenses with title, amount, category, and date.
- **Edit/Delete Expenses:** Modify or remove any expense entry.
- **Category Filtering:** Filter expenses by category, month, and year.
- **Expense Summary:** View total expenses, remaining budget, and budget usage progress bar.
- **Responsive UI:** Built with React Bootstrap for a clean, mobile-friendly interface.
- **State Management:** Uses Redux Toolkit for efficient and scalable state handling.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/FrontifybyHB/expense-tracker.git
   cd expense-tracker
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Run the app locally:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173) by default (Vite).

---

## Project Structure

```
.
├── public/                # Static assets
├── src/
│   ├── app/               # Redux store setup
│   ├── components/        # React components (inputs, lists, filters, summary)
│   ├── features/          # Redux slices (expenseSlice, etc.)
│   ├── App.jsx            # Main application component
│   ├── App.css            # Custom styles for the app
│   └── index.js(x)        # Entry point
├── index.html             # HTML template (Vite)
└── README.md
```

---

## Core Components

- **SalaryInput:** Set your monthly income.
- **ExpenseForm:** Add new expenses with title, amount, category, and date.
- **ExpenseList:** View, edit, and delete expenses.
- **CategoryFilter:** Filter entries by category, month, and year.
- **ExpenseSummary:** Overview of spending, remaining budget, and visual progress bar.
- **Header:** Navigation bar with app title.

---

## State & Logic

- **Redux Toolkit:** Centralizes all application state (salary, expenses, categories, filters).
- **Selectors:** Efficiently compute derived data like filtered expenses, totals, and remaining budget.
- **Local Storage (optional):** You can extend the app to persist data between sessions.

---

## Customization

- **Categories:** Predefined categories include Food, Transportation, Housing, Entertainment, Utilities, Healthcare, and Other. Edit `src/features/expenseSlice.js` to add or remove categories.
- **Styling:** Built on React Bootstrap with additional custom CSS in `src/App.css` and `src/index.css`.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)

---

## Acknowledgements

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Vite](https://vitejs.dev/)
