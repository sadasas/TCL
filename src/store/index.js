"use client";
import { Provider } from "react-redux";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import shoppingChartReducer from "../features/shoppingChartSlice";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingChartReducer,
  },
});

export const ProviderWrapper = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
