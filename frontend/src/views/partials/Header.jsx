import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import { MdDashboard, MdLogin } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { TiArrowSortedDown } from "react-icons/ti";
// import {fetchPosts, setPosts , posts} from "../cors/Index" 

import { useAuthStore } from "../../store/Auth";

function Header() {
  // const [state, setState] = useState();
  const [isLoggedIn, user] = useAuthStore((state) => [
    state.isLoggedIn,
    state.user,
  ]);

  const [isOpen, setIsOpen] = useState(null);

  const toggleDropdown = (dropdown) => {
    setIsOpen(isOpen === dropdown ? null : dropdown);
  };

  // const handleSearch = (e) => {
  //   const query = e.target.value.toLowerCase();
  //   if (query === "") {
  //     fetchPosts();
  //   } else {
  //     const filtered = posts.filter((p) => {
  //       return p.title.toLowerCase().includes(query);
  //     });
  //     setPosts(filtered);
  //   }
  // };

  return (
    <header className="bg-[#35478a] z-100 flex flex-col shadow-xl text-white sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/blog-logo.png" alt="logo" className="w-48" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          type="button"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="relative">
           
          </div>

          <ul className="flex items-center space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-blue-400">
                Category
              </Link>
            </li>
            <li className="relative group">
              <span
                onClick={() => toggleDropdown("Pages")}
                className="cursor-pointer flex items-center hover:text-blue-400"
              >
                Pages
                <TiArrowSortedDown />
              </span>
              {isOpen === "Pages" && (
                <ul className="absolute left-0 mt-2 bg-gray-700 text-sm rounded shadow-lg">
                  <li>
                    <Link
                      to="/about"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <ul className="flex items-center gap-3">
              {isLoggedIn() ? (
                <>
                  <li className="relative  ">
                    <span
                      onClick={() => toggleDropdown("dashboard")}
                      className="cursor-pointer flex items-center hover:text-blue-400"
                    >
                      Dashboard
                      <TiArrowSortedDown />
                    </span>
                  </li>
                  {isOpen === "dashboard" && (
                    <ul className="absolute mt-60 -ml-3  group-hover:block bg-gray-700 text-sm rounded shadow-lg">
                      <li>
                        <Link
                          to="/dashboard"
                          className="block px-4 py-2 hover:bg-gray-600"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/posts"
                          className="block px-4 py-2 hover:bg-gray-600"
                        >
                          Posts
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/add-post"
                          className="block px-4 py-2 hover:bg-gray-600"
                        >
                          Add Post
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/comments"
                          className="block px-4 py-2 hover:bg-gray-600"
                        >
                          Comments
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/notifications"
                          className="block px-4 py-2 hover:bg-gray-600"
                        >
                          Notifications
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 hover:bg-gray-600"
                        >
                          Profile
                        </Link>
                      </li>
                    </ul>
                  )}
                  <Link
                    to="/logout"
                    className="bg-blue-500 text-white flex items-center gap-3 px-4 py-2 rounded hover:bg-blue-600"
                  >
                    <TbLogout2 />
                    LogOut
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="bg-green-500 tracking-widest flex items-center gap-3 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    <FaUserPlus />
                    Register
                  </Link>

                  <Link
                    to="/login"
                    className="bg-blue-500 text-white flex items-center gap-3 px-4 py-2 rounded hover:bg-blue-600"
                  >
                    <MdLogin />
                    Login
                  </Link>
                </>
              )}
            </ul>
            <li></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
