import { createSlice } from '@reduxjs/toolkit';
export const expenseSlice = createSlice({
    name: 'expenses',
    initialState: {
        list: [],
    },
    reducers: {
        addExpense: (state, action) => {
            state.list.push(action.payload);
        },
        deleteExpense: (state, action) => {
            state.list = state.list.filter((expense, index) => index !== action.payload);
        },
    },
});

export const { addExpense, deleteExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
