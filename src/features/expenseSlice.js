import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    salary: 0,
    expenses: [],
    categories: [
        "Food",
        "Transportation",
        "Housing",
        "Entertainment",
        "Utilities",
        "Healthcare",
        "Other",
    ],

    filter: {
        category: 'All',
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
    }
}


export const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {

        addSalary: (state, action) => {
            state.salary = action.payload
        },

        addExpense: (state, action) => {
            state.expenses.push({
                id: Date.now().toString(),
                ...action.payload,
                date: new Date(action.payload.date).toISOString()
            })
        },

        setFilter: (state, action) => {
            state.filter = { ...state.filter, ...action.payload }
        },

        editExpense: (state, action) => {
            const { id, ...update } = action.payload;
            const expenseIndex = state.expenses.findIndex((exp) => {
                exp.id === id;
            });
            if (expenseIndex === -1) return;
            state.expenses[expenseIndex] = {
                ...state.expenses[expenseIndex],
                ...update,
                date: new Date(update.date).toISOString()
            }
        },

        deleteExpense: (state, action) => {
            state.expenses = state.expenses.filter(exp => exp.id !== action.payload)
        }

    },
})

// Action creators are generated for each case reducer function
export const { addExpense, addSalary, setFilter, editExpense, deleteExpense } = expenseSlice.actions

export const selectSalary = (state) => state.expenses.salary;
export const selectCategories = (state) => state.expenses.categories;

export default expenseSlice.reducer