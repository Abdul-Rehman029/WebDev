import React, { useState } from "react";
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/1459399/pexels-photo-1459399.jpeg')" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full backdrop-blur-md shadow-lg transition-all duration-300 bg-opacity-30">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4 relative">
            <label htmlFor="email" className="block text-zinc-900 text-sm font-medium mb-2">
              Email Address
            </label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaEnvelope className="text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              className="w-full pl-10 px-4 py-2 border-b border-gray-300 bg-transparent text-gray-700 focus:outline-none focus:border-indigo-500 focus:ring-0 transition-all duration-300 ease-in-out"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-zinc-900 text-sm font-medium mb-2">
              Password
            </label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaLock className="text-gray-400" />
            </div>
            <input
              type="password"
              id="password"
              className="w-full pl-10 px-4 py-2 border-b border-gray-300 bg-transparent text-gray-700 focus:outline-none focus:border-indigo-500 focus:ring-0 transition-all duration-300 ease-in-out"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <div className="flex justify-center mb-4">
            <button
              type="submit"
              className="flex justify-center w-full/2 bg-indigo-600 text-white py-2 px-4 rounded-[32px] hover:bg-indigo-600 transition duration-200 transform hover:scale-105"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Third-party Login */}
        <div className="flex flex-col items-center mb-4">
          <p className="text-zinc-100 text-sm mb-2">Or sign in with</p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-[32px] hover:bg-blue-600 transition duration-200 flex items-center space-x-2">
              <FaFacebook />
              <span>Facebook</span>
            </button>
            <button className="bg-red-500 text-white py-2 px-6 rounded-[32px] hover:bg-red-600 transition duration-200 flex items-center space-x-2">
              <FaGoogle />
              <span>Google</span>
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="text-center">
          <a href="#" className="text-sm text-indigo-100 hover:text-indigo-800">Forgot Password?</a>
        </div>

        {/* Signup Link */}
        <div className="text-center mt-4">
          <p className="text-zinc-100 text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="text-indigo-100 hover:text-indigo-800">Sign up here</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
