import React, { useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../../utils/auth";
// import { useAuthStore } from "../../store/auth";

function Login() {
  const [bioData, setBioData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleBioDataChange = (event) => {
    const { name, value } = event.target;
    setBioData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await login(bioData.email, bioData.password);
    if (error) {
      alert("Login failed. Please check your credentials and try again.");
      setBioData({ email: "", password: "" });
    } else {
      navigate("/");
    }

    setIsLoading(false);
  };

  return (
    <>
      <Header />
      <section
        className="h-[84vh] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/loginpage.jpg')" }}
      >
        {/* Background Blur Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>

        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center h-full">
          <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="mb-4 text-center">
              <h1 className="text-2xl text-white bg-green-900 p-2 rounded-md shadow-lg tracking-widest font-bold">
                Sign In
              </h1>
              <p className="text-white mt-5">
                Don’t have an account?
                <Link
                  to="/register"
                  className="text-white font-bold p-2 tracking-widest hover:underline ml-1"
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-white text-xl tracking-widest"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={bioData.email}
                  onChange={handleBioDataChange}
                  className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="johndoe@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block font-medium text-white text-xl tracking-widest"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={bioData.password}
                  onChange={handleBioDataChange}
                  className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="********"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2 text-white">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-white hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-2 rounded-lg ${
                  isLoading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white focus:ring-4 focus:ring-blue-300`}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
