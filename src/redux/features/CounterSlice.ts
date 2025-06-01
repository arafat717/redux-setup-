import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todo: [],
};
export const counterSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

// export const {} = counterSlice.actions;
export default counterSlice.reducer;
