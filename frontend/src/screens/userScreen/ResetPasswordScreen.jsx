import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { resetPassword } from "@/store/authScreenSlice"; // adjust this path to where your slice is located

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, success, error } = useSelector((state) => state.auth);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (password !== confirmPassword) {
  //     toast.error("Passwords do not match");
  //     return;
  //   }

  //   // Dispatch resetPassword action
  //   dispatch(resetPassword({ data: { password }, token }));
    
  //   // Check for success or error directly after the dispatch
  //   if (response.meta.requestStatus === "fulfilled") {
  //     toast.success("Password reset successfully");

  //     // Adding a slight delay before navigating
  //     setTimeout(() => {
  //       navigate("/login");
  //     }, 1000); // 1-second delay to let the success message appear
  //   }

  //   if (response.meta.requestStatus === "rejected") {
  //     toast.error(error?.message || "Failed to reset password. Please try again.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
  
    try {
      // Await the dispatch to ensure you wait for the action to complete
      const response = await dispatch(resetPassword({ data: { password }, token }));
  
      // Check for success or error directly after the dispatch
      if (response.meta.requestStatus === "fulfilled") {
        toast.success("Password reset successfully");
  
        // Adding a slight delay before navigating
        setTimeout(() => {
          navigate("/auth/login");
        }, 1000); // 1-second delay to let the success message appear
      } else if (response.meta.requestStatus === "rejected") {
        // Handle the rejected case with error handling
        toast.error(response.error?.message || "Failed to reset password. Please try again.");
      }
    } catch (err) {
      // Catch any additional errors that may occur
      toast.error("An error occurred while resetting the password. Please try again.");
    }
  };
  

  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <div className="card shadow-lg bg-white">
            <div className="card-title text-center border-b border-gray-300 py-3">
              <h2 className="text-3xl font-semibold">Reset Password</h2>
            </div>
            <div className="card-body p-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Enter Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    className="w-full bg-[#222] text-white py-2 px-4 rounded-md hover:bg-[#221f1fcc] focus:outline-none"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordScreen;
