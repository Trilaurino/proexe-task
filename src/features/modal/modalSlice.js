import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  data: {},
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.open = true;
      state.data = action.payload;
    },
    closeModal: (state) => {
      state.open = false;
      state.type = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectModal = (state) => state.modal;

export default modalSlice.reducer;
