import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      if (state.length > 1) state.forEach();
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      state = state.filter((i) => i.id != action.payload);
      console.log(state);
    },
  },
});

export const { addItem, removeItem } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
