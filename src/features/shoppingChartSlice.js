import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: { value: [] },
  reducers: {
    addItem: (state, action) => {
      let isSame = false;

      if (state.value != null && state.value.length > 0) {
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
      state.value = state.value.filter((item) => {
        return item.description !== action.payload;
      });
    },
    updateItem: (state, action) => {
      state.value.forEach((item) => {
        if (item.description === action.payload.description) {
          item.piece = action.payload.piece;
        }
      });
    },
  },
});

export const { addItem, removeItem, updateItem } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
