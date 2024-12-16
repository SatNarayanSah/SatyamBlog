import React, { useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/Auth";
import { register } from "../../utils/auth";
import {  FaSpinner, FaUserPlus } from "react-icons/fa6";

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

    const { error } = register(
      biodata.full_name,
      biodata.email,
      biodata.password,
      biodata.password2
    );
    if (error) {
      alert(JSON.stringify(error));
    } else {
      navigate("/");
    }
    setIsLoading(false);
  };

  return (
    <>
      <Header />
      <section className="container mx-auto flex flex-col h-[69vh]  justify-center mt-12 px-4 md:mt-36">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-md"
          style={{ backgroundImage: 'url("/register-bg-image.jpg")' }}
        ></div>
        <div className="flex relative z-10 justify-center items-center">
          <div className="w-full max-w-sm md:max-w-md bg-gray-300 bg-opacity-10 bg-blur shadow-lg rounded-lg p-6 md:p-8">
            <div className="mb-6 text-center">
              <h1 className="text-3xl md:text-2xl font-bold tracking-widest text-white bg-green-900 p-2 rounded-md mb-2">
                Sign up
              </h1>
              <span className="text-md text-white shadow-xl">
                Already have an account?
                <Link
                  to="/login/"
                  className="text-white font-bold p-2 rounded-md tracking-widest ml-1 hover:underline"
                >
                  Sign In
                </Link>
              </span>
            </div>
            {/* Form */}
            <form
              onSubmit={handleRegister}
              className="space-y-4 z-100"
              noValidate
            >
              {/* Full Name */}
              <div>
                <label
                  htmlFor="full_name"
                  className="tracking-widest text-xl font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  onChange={handleBioDataChange}
                  value={biodata.full_name}
                  id="full_name"
                  name="full_name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm outline-none p-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="John Doe"
                  required
                />
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="tracking-widest text-xl font-medium text-white"
                >
                  Email Address
                </label>
                <input
                  onChange={handleBioDataChange}
                  value={biodata.email}
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md outline-none p-3 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="johndoe@gmail.com"
                  required
                />
              </div>
              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="tracking-widest text-xl  font-medium text-white"
                >
                  Password
                </label>
                <input
                  onChange={handleBioDataChange}
                  value={biodata.password}
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full rounded-md outline-none p-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="**************"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm_password"
                  className="tracking-widest text-xl  font-medium text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  onChange={handleBioDataChange}
                  value={biodata.password2}
                  id="confirm_password"
                  name="password2"
                  className="mt-1 block w-full rounded-md border-gray-300 outline-none p-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="**************"
                  required
                />
              </div>
              <div>
                {isLoading === true ? (
                  <button
                    type="submit"
                    disabled
                    className="w-full flex items-center gap-2 justify-center py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Processing <FaSpinner />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full flex items-center gap-2 justify-center py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign Up <FaUserPlus />
                  </button>
                )}
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
