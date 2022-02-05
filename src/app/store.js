import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import modalReducer from "../features/modal/modalSlice";
import alertReducer from "../features/alert/alertSlice";

const reducer = {
  modal: modalReducer,
  users: usersReducer,
  alert: alertReducer,
};

export const store = configureStore({
  reducer: reducer,
});
