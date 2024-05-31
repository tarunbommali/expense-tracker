// src/redux/appStore.js
import { configureStore } from "@reduxjs/toolkit";
import financeReducer from "./financeSlice";

const appStore = configureStore({
  reducer: {
    finance: financeReducer,
  },
});

export default appStore;
