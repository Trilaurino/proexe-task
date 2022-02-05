import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const apiUrl =
  "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

export const getUsersAsync = createAsyncThunk(
  "users/getUsers",
  async () => {
    const res = await fetch(apiUrl).then((data) => data.json());
    return res;
  }
);

export const deleteUserAsync = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    const userToDelete = apiUrl + "/" + userId;
    const res = await fetch(userToDelete, { method: "DELETE" });
    // here handle the response, instead sending user to filter
    return userId;
  }
);

export const editUserAsync = createAsyncThunk(
  "users/editUser",
  async (updatedFields) => {
    let userToEdit = apiUrl + "/" + updatedFields.id;
    const res = await fetch(userToEdit, { method: "PUT", body: updatedFields });
    console.log(res);
    const editedRes = {
      id: updatedFields.id,
      name: updatedFields.name,
      email: updatedFields.email,
      username: "",
      address: { city: "" },
    };

    editedRes.username = updatedFields.username || "";
    editedRes.address.city = updatedFields.address?.city || "";

    return editedRes;
  }
);

export const addUserAsync = createAsyncThunk(
  "users/addUser",
  async (newUser, thunkAPI) => {
    const res = await fetch(apiUrl, { method: "POST" });
    console.log(res);
    // here handle the response, instead sending user to filter
    return newUser;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(deleteUserAsync.fulfilled, (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
      state.alert = `User with id ${action.payload} was deleted!`;
    });

    builder.addCase(editUserAsync.fulfilled, (state, { payload }) => {
      const user = state.users.find((e) => e.id === payload.id);
      if (user) {
        user.name = payload.name;
        user.email = payload.email;
        user.username = payload.username || "";
        user.address.city = payload.address.city || "";
      }
      state.alert = `User with id ${payload.id} was updated!`;
    });

    builder.addCase(addUserAsync.fulfilled, (state, action) => {
      state.users = [...state.users, action.payload];
      state.alert = `User with id ${action.payload.id} was added!`;
    });
  },
});

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;
