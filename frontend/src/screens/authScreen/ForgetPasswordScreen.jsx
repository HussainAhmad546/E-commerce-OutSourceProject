import React, { useState } from "react";
// import { forgetPass } from '../../api/authApi';
import { forgetPass } from "@/store/authScreenSlice"; 
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); 
  const {token} = useParams();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.auth);


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      await dispatch(forgetPass({ email })).unwrap();  // Dispatching the action
      toast.success("Reset link sent to your email");
      navigate("/reset-password-sent");
    } catch (error) {
      toast.error(error?.message || "Failed to send reset link. Please try again.");
    }
  };

  return (
    <div className="container mx-auto mt-5 mb-5">
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <div className="card ">
            <div className="card-title text-center  py-3">
              <h2 className="text-3xl font-semibold">Forgot Password?</h2>
            </div>
            <div className="p-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    className="w-full bg-[#222] text-white py-2 px-4 rounded-md hover:bg-[#221f1fcc] focus:outline-none"
                    disabled={isLoading} // Disable the button while loading
                  >
                    {isLoading ? 'Sending...' : 'Submit'}
                  </button>
                </div>
              </form>
              {error && <p className="text-red-500 mt-3">{error}</p>} {/* Displaying error */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ForgetPasswordScreen;