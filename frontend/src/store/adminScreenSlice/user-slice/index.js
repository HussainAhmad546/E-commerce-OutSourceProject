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

// Edit user
// export const editUser = createAsyncThunk(
//   "/users/editUser",
//   async ({ id, formData }) => {
//     const result = await axios.put(
//       `http://localhost:5000/api/admin/users/edit/${id}`,
//       formData,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return result?.data;
//   }
// );

// Delete user
// export const deleteUser = createAsyncThunk(
//   "/users/deleteUser",
//   async (id) => {
//     const result = await axios.delete(
//       `http://localhost:5000/api/admin/users/delete/${id}`
//     );

//     return result?.data;
//   }
// );

const AdminUsersSlice = createSlice({
  name: "adminUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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

      // Edit User
      // .addCase(editUser.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(editUser.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   // Update the specific user in the state
      //   const index = state.userList.findIndex((user) => user._id === action.payload.data._id);
      //   if (index !== -1) {
      //     state.userList[index] = action.payload.data;
      //   }
      // })
      // .addCase(editUser.rejected, (state) => {
      //   state.isLoading = false;
      // })

      // Delete User
      // .addCase(deleteUser.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(deleteUser.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   // Remove the deleted user from the list
      //   state.userList = state.userList.filter((user) => user._id !== action.payload.data._id);
      // })
      // .addCase(deleteUser.rejected, (state) => {
      //   state.isLoading = false;
      // });
  },
});

export default AdminUsersSlice.reducer;
