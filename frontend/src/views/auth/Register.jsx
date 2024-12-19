import React, { useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/Auth";
import { register } from "../../utils/auth";
import { FaSpinner, FaUserPlus } from "react-icons/fa6";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [biodata, setBioData] = useState({
    full_name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleBioDataChange = (event) => {
    setBioData({
      ...biodata,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = () => {
    setBioData({
      full_name: "",
      email: "",
      password: "",
      password2: "",
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (biodata.password !== biodata.password2) {
      toast.error("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await register(
        biodata.full_name,
        biodata.email,
        biodata.password,
        biodata.password2
      );
      
      if (error) {
        toast.error(error.message || "Registration failed");
      } else {
        toast.success("Registration successful!");
        resetForm();
        navigate("/");
      }
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <ToastContainer position="top-right" autoClose={3000} />
      <section
        className="h-[84vh] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/loginpage.jpg')" }}
      >
        {/* Background Blur Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>

        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center h-full">
          <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 w-full max-w-md">
            {/* Header Section */}
            <div className="mb-4 text-center">
              <h1 className="text-2xl text-white bg-green-900 p-2 rounded-md shadow-lg tracking-widest font-bold">
                Create Account
              </h1>
              <p className="text-white mt-5">
                Already have an account?{" "}
                <Link to="/login" className="text-white font-bold p-2 tracking-widest hover:underline ml-1">
                  Sign In
                </Link>
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleRegister} noValidate>
              {/* Full Name Input */}
              <div>
                <label htmlFor="full_name" className="block font-medium text-white text-xl tracking-widest">
                  Full Name
                </label>
                <input
                  id="full_name"
                  name="full_name"
                  type="text"
                  required
                  value={biodata.full_name}
                  onChange={handleBioDataChange}
                  className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block font-medium text-white text-xl tracking-widest">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={biodata.email}
                  onChange={handleBioDataChange}
                  className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block font-medium text-white text-xl tracking-widest">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={biodata.password}
                  onChange={handleBioDataChange}
                  className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>

              {/* Confirm Password Input */}
              <div>
                <label htmlFor="password2" className="block font-medium text-white text-xl tracking-widest">
                  Confirm Password
                </label>
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  required
                  value={biodata.password2}
                  onChange={handleBioDataChange}
                  className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-2 rounded-lg ${
                  isLoading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white focus:ring-4 focus:ring-blue-300 flex items-center justify-center`}
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2 h-5 w-5" />
                    Creating account...
                  </>
                ) : (
                  <>
                    Create Account
                    <FaUserPlus className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>

              {/* Terms and Privacy */}
              <div className="text-center text-sm text-white mt-4">
                By creating an account, you agree to our{" "}
                <a href="#" className="font-medium hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="font-medium hover:underline">
                  Privacy Policy
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Register;
