import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: "",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    alert: (state, action) => {
      state.alert = action.payload.message;
    },
  },
});

export const { alert } = alertSlice.actions;

export const selectAlert = (state) => state.alert;

export default alertSlice.reducer;
