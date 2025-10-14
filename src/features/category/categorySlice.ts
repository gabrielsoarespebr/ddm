import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: "todos",
  reducers: {
    handleCategorySelection(state, action) {
      return action.payload;
    },
  },
});

export const { handleCategorySelection } = categorySlice.actions;
export default categorySlice.reducer;
