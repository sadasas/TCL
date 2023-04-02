import { configureStore } from "@reduxjs/toolkit";
import shoppingChartSlice from "../features/shoppingChartSlice";

const store = configureStore({
  reducer: {
    items: shoppingChartSlice,
  },
});
export default store;
