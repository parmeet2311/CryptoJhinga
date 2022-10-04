import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coin_Name: "",
};

export const coinlistSlice = createSlice({
  name: "coinlist",
  initialState,
  reducers: {
    searchCoin: (state, action) => {
      state.coin_Name = action.payload;
    },
  },
});
export const { searchCoin } = coinlistSlice.actions;

export default coinlistSlice.reducer;
