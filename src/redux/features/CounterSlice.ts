import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type counterType = {
  count: number;
};
const initialState: counterType = { count: 0 };
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByValue: (state, actions: PayloadAction<number>) => {
      state.count = state.count + actions.payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
