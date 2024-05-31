// src/redux/financeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expense: 0,
  income: 0,
  expenseStatement: [],
  incomeStatement: [],
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    setExpense(state, action) {
      const { amount, description } = action.payload;
      state.expense += amount;
      state.expenseStatement.push({
        amount,
        description,
        date: new Date().toISOString(),
      });
    },
    setIncome(state, action) {
      const { amount, description } = action.payload;
      state.income += amount;
      state.incomeStatement.push({
        amount,
        description,
        date: new Date().toISOString(),
      });
    },
  },
});

export const { setExpense, setIncome } = financeSlice.actions;

export default financeSlice.reducer;
