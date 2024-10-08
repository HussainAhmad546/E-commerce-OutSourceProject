import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  userList: [],
};
// Fetch all users
export const fetchAllUsers = createAsyncThunk(
  "/users/fetchAllUsers",
  async () => {
    const result = await axios.get("http://localhost:5000/api/get-all-users");
    return result?.data;
  }
);

export const updateUserStatus = createAsyncThunk(
  "/users/updateUserStatus",
  async ({ userId, message }) => {
    const result = await axios.patch(
      `http://localhost:5000/api/status-update/${userId}`,
      { message }
    );
    return result?.data;
  }
);


// Delete user
export const deleteUser = createAsyncThunk(
  "/users/deleteUser",
  async (id) => {
    const result = await axios.delete(
      `http://localhost:5000/api/delete-user/${id}`
    );
    return result?.data;
  }
);

const AdminUsersSlice = createSlice({
  name: "adminUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //fetch all users
      .addCase(fetchAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userList = action.payload.users;
      })
      .addCase(fetchAllUsers.rejected, (state) => {
        state.isLoading = false;
        state.userList = [];
      })
      // Update User Status
      .addCase(updateUserStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedUser = action.payload.user;
        state.userList = state.userList?.map((user) =>
          user?._id === updatedUser?._id ? updatedUser : user
        );
      })
      .addCase(updateUserStatus.rejected, (state) => {
        state.isLoading = false;
      })
      // Delete Users
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userList = state.userList.filter((user) => user._id !== action.payload?.deletedUserId);
      })
      .addCase(deleteUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default AdminUsersSlice.reducer;
