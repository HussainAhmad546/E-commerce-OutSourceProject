import { useState } from "react";
import { Menu, MenuItem } from "@headlessui/react";
import { MoreHorizontal } from "lucide-react";

function AdminUsersView() {
  const [usersList] = useState([
    { id: "1", name: "John Doe", email: "john@example.com", status: "active" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", status: "block" },
    { id: "3", name: "Mike Johnson", email: "mike@example.com", status: "active" },
    { id: "4", name: "John Doe", email: "john@example.com", status: "block" },
    { id: "5", name: "Jane Smith", email: "jane@example.com", status: "active" },
    { id: "6", name: "Mike Johnson", email: "mike@example.com", status: "block" },
    { id: "7", name: "John Doe", email: "john@example.com", status: "active" },
    { id: "8", name: "Jane Smith", email: "jane@example.com", status: "block" },
    { id: "9", name: "Mike Johnson", email: "mike@example.com", status: "active" },
  ]);

  return (
    <div className="shadow-lg rounded-lg border border-gray-300 bg-white overflow-hidden">
      {/* Card Header */}
      <div className="bg-black p-4">
        <h2 className="text-lg font-bold text-white">All Users</h2>
      </div>
      
      {/* Card Content */}
      <div className="p-4">
        <table className="min-w-full table-auto border-collapse">
          {/* Table Header */}
          <thead className="bg-gray-100 text-gray-800 text-left text-sm font-semibold">
            <tr>
              <th className="px-6 py-4">User ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-gray-700 text-sm">
            {usersList.map((userItem) => (
              <tr key={userItem.id} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4">{userItem.id}</td>
                <td className="px-6 py-4">{userItem.name}</td>
                <td className="px-6 py-4">{userItem.email}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      userItem.status === "active"
                        ? "bg-blue-100 text-green-600"
                        : "bg-blue-100 text-red-600"
                    }`}
                  >
                    {userItem.status.charAt(0).toUpperCase() + userItem.status.slice(1)}
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
                            <button className={`${active ? "bg-gray-100" : ""} flex w-full px-4 py-2 text-sm text-gray-700`}>
                              Block
                            </button>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <button className={`${active ? "bg-gray-100" : ""} flex w-full px-4 py-2 text-sm text-red-600`}>
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

