import React from 'react';
import { SiTicktick } from "react-icons/si";
import { Link } from 'react-router-dom';

const ResetPasswordSentScreen = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] ">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <div className=" p-4 rounded-full mx-auto mb-4 flex justify-center">
          <SiTicktick className=" text-6xl rounded-ful text-green-500" />
        </div>
        <h2 className="text-2xl font-semibold mb-4">Success</h2>
        <p className="text-gray-700">Reset link has been sent successfully. Please check your email.</p>
        <div className="mt-6">
          <Link to="/auth/login" className="text-blue-500 hover:underline">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordSentScreen;