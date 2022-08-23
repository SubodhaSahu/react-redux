import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "./FakeUsers";

const initialStateValue = UsersData;

export const userListSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    updateName: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
        }
      });
    },
    deleteUser: (state, action) => {
      console.log(action);
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser, updateName, deleteUser } = userListSlice.actions;

export default userListSlice.reducer;
