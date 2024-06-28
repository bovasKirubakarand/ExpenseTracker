import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './Reducer/expenseSlice';

export const store = configureStore({
  reducer: {
    expenses: expenseReducer,
  },
});
