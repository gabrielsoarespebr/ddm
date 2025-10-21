import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    searchProduct(_, action) {
      return action.payload.toLowerCase();
    },
  },
});

export const { searchProduct } = searchSlice.actions;
export default searchSlice.reducer;
