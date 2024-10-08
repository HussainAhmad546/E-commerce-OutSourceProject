import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllUsers,
  deleteUser,
  updateUserStatus,
} from "@/store/adminScreenSlice/user-slice";
import { Menu, MenuItem } from "@headlessui/react";
import { MoreHorizontal } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdBlock } from "react-icons/md";
import { CgUnblock } from "react-icons/cg";
import { MdDeleteOutline } from "react-icons/md";

function AdminUsersView() {
  const dispatch = useDispatch();
  const { userList, isLoading } = useSelector((state) => state.adminUsers);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleStatusChange = async (userId, newStatus) => {
    try {
      const response = await dispatch(
        updateUserStatus({ userId, message: newStatus })
      ).unwrap();
      if (response?.success) {
        toast.success(response?.message);
      } else if (response?.status === 404) {
        toast.error(response?.message);
      }
    } catch (error) {
      if (error.response?.status === 500) {
        toast.error("Internal server error!");
      }
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await dispatch(deleteUser(userId)).unwrap();
      if (response?.success) {
        toast.success(response?.message);
      } else if (response?.status === 404) {
        toast.error(response?.message);
      }
    } catch (error) {
      if (error.response?.status === 500) {
        toast.error("Internal server error!");
      }
    }
  };
  const filteredUsers = userList.filter((user) => user.role !== "admin");
  return (
    <>
      <div className="shadow-lg rounded-lg border border-gray-300 bg-white">
        <div className="bg-black p-4">
          <h2 className="text-lg font-bold text-white">All Users</h2>
        </div>
        <div className="p-4">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-100 text-gray-800 text-left text-sm font-semibold">
              <tr>
                <th className="px-6 py-4">User ID</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {filteredUsers.map((userItem) => (
                <tr
                  key={userItem.id}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-6 py-4">{userItem?._id}</td>
                  <td className="px-6 py-4">{userItem?.userName}</td>
                  <td className="px-6 py-4">{userItem?.email}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        userItem?.status === "active"
                          ? "bg-blue-100 text-green-600"
                          : "bg-blue-100 text-red-600"
                      }`}
                    >
                      {userItem?.status?.charAt(0).toUpperCase() +
                        userItem?.status?.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Menu as="div" className="relative inline-block text-left">
                      <Menu.Button className="inline-flex justify-center w-full px-2 py-1 text-sm font-medium text-gray-700 rounded-full hover:bg-gray-200">
                        <MoreHorizontal size={24} />
                      </Menu.Button>
                      <Menu.Items className="absolute right-0 w-36 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                        <div className="py-1">
                          {userItem?.status === "active" ? (
                            <MenuItem>
                              {({ active }) => (
                                <button
                                  onClick={() =>
                                    handleStatusChange(userItem?._id, "block")
                                  }
                                  className={`${
                                    active ? "bg-gray-100" : ""
                                  } flex items-center gap-1 w-full px-4 py-2 text-sm text-gray-700`}
                                >
                                  <MdBlock size={15}/>
                                  <span> Block </span>
                                </button>
                              )}
                            </MenuItem>
                          ) : (
                            <MenuItem>
                              {({ active }) => (
                                <button
                                  onClick={() =>
                                    handleStatusChange(userItem?._id, "active")
                                  }
                                  className={`${
                                    active ? "bg-gray-100" : ""
                                  } flex items-center gap-1 w-full px-4 py-2 text-sm text-gray-700`}
                                >
                                  <CgUnblock size={15}/>
                                 <span> Unblock </span>
                                </button>
                              )}
                            </MenuItem>
                          )}
                          <MenuItem>
                            {({ active }) => (
                              <button
                                onClick={() => handleDeleteUser(userItem?._id)}
                                className={`${
                                  active ? "bg-gray-100" : ""
                                } flex items-center gap-1 w-full px-4 py-2 text-sm text-red-600`}
                              >
                                <MdDeleteOutline size={18}/>
                                <span> Delete</span>
                              </button>
                            )}
                          </MenuItem>
                        </div>
                      </Menu.Items>
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminUsersView;
