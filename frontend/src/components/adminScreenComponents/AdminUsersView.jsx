import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "@/store/adminScreenSlice/user-slice";
import { Menu, MenuItem } from "@headlessui/react";
import { MoreHorizontal } from "lucide-react";

function AdminUsersView() {
  const dispatch = useDispatch();
  const { userList, isLoading } = useSelector((state) => state.adminUsers);
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);
  return (
    <div className="shadow-lg rounded-lg border border-gray-300 bg-white overflow-hidden">
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
            {userList.map((userItem) => (
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
                    <Menu.Items className="absolute right-0 w-36 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <MenuItem>
                          {({ active }) => (
                            <button
                              className={`${
                                active ? "bg-gray-100" : ""
                              } flex w-full px-4 py-2 text-sm text-gray-700`}
                            >
                              Block
                            </button>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <button
                              className={`${
                                active ? "bg-gray-100" : ""
                              } flex w-full px-4 py-2 text-sm text-red-600`}
                            >
                              Delete
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
  );
}

export default AdminUsersView;
