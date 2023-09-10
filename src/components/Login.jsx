import React from 'react';
import mysignup from '../image/signup.png';

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white font-sans">
        <div className="container mx-auto flex flex-row items-center">
          <img src={mysignup} alt="Signup Image" className="w-1/2" />
          <div className="rightContainer flex flex-col ml-8">
            <div className="info">
              <h3 className="text-2xl font-semibold">Thanks for Connecting with Us</h3>
              <p>Enter Your Details</p>
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full px-4 py-2 border rounded-lg mt-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="login-options mt-4">
              <button className="login-button bg-red-600 text-white py-2 px-4 rounded-lg font-semibold">
                Log In
              </button>
              <a href="#" className="text-blue-600 ml-2">
                Forget password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
