import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import shoppingChartReducer from "../features/shoppingChartSlice";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingChartReducer,
  },
});
