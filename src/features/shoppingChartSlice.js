import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: { value: [] },
  reducers: {
    addItem: (state, action) => {
      let isSame = false;

      if (state != null && state.length > 0) {
        state.value.forEach((item) => {
          if (item.description === action.payload.description) {
            isSame = true;
            item.piece += action.payload.piece;
          }
        });
      }
      if (!isSame)
        state.value.push({ ...action.payload, id: state.value.length + 1 });
    },
    removeItem: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addItem, removeItem } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
