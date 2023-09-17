import React from 'react';
import mysignup from '../image/signup.png';

const Sign_up = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white font-sans">
        <div className="container mx-auto flex flex-row justify-center">
          <img src={mysignup} alt="Signup Image" className="w-1/2" />
          <div className="rightContainer flex flex-col ml-8">
            <div className="info">
              <h3 className="text-2xl font-semibold">Create an Account</h3>
              <p>Enter Your Details</p>
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="input-container">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg mt-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full px-4 py-2 border rounded-lg mt-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="signup-button bg-red-600 text-white py-2 px-4 rounded-lg mt-4 font-semibold">
              Create An Account
            </button>
            <button className="gbtn bg-blue-600 text-white py-2 px-4 rounded-lg mt-2 font-semibold">
              Log In with Google
            </button>
            <div className="login-options flex-1 text-left mt-4">
              <p>
                Already have an account?{' '}
                <a href="http://localhost:3000/Login" className="text-blue-600">
                  Log In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign_up;
