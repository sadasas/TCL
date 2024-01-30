import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import shoppingChartSlice from "features/shoppingChartSlice";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingChartSlice,
  },
});
