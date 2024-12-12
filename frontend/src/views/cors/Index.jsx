import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";

import {
  BsFillPeopleFill,
  BsFilePostFill,
  BsHeartFill,
  BsBookmarkCheckFill,
  BsBookmarkCheck,
  BsBookmarkFill,
  BsHeart,
  BsPeople,
  BsCalendar,
  BsEye,
} from "react-icons/bs";

import Toast from "../../plugin/Toast";
import Moment from "../../plugin/Moment";
import apiInstance from "../../utils/Axios";
import { FaUserAlt } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
const index = () => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);

  const fetchPosts = async () => {
    try {
      const response_post = await apiInstance.get("post/lists/");
      const response_category = await apiInstance.get("post/category/list");
      setPosts(response_post.data);
      setCategory(response_category.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const postItems = posts?.slice(indexOfFirstItem, indexOfLastItem);
  const totalpages = Math.ceil(posts?.length / itemsPerPage);
  const pageNumber = Array.from(
    { length: totalpages },
    (_, index) => (index + 1)
  );

  return (
    <>
      <Header />
      <section className="p-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full">
              <Link to="#" className="block group">
                {/* <img
                  src="assets/images/adv-3.png"
                  alt="image"
                  className="w-full h-auto transition-transform duration-200 group-hover:scale-105"
                /> */}
              </Link>
              <h2 className="text-start block mt-4 text-2xl font-bold">
                Trending Articles 🔥
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {postItems?.map((post, index) => (
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden"
                key={post?.id || index}
              >
                <div className="relative  overflow-hidden">
                  <img
                    src={post.image}
                    alt="Card"
                    className="w-full h-40 object-fit"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2">
                    <Link
                      to={post.slug}
                      className="text-blue-400 capitalize hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h4>
                  <div className="flex items-center space-x-2">
                    <button className="text-red-500 hover:text-red-700">
                      <BsBookmarkFill />
                    </button>
                    <button className="text-blue-500 hover:text-blue-700">
                      <BsHeart />
                    </button>
                  </div>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li className="flex font-bold tracking-widest items-center gap-2">
                      <FaUserAlt />
                      {post?.profile?.full_name || "Author"}
                    </li>
                    <li className="flex  items-center gap-2">
                      <BsCalendar />
                      {Moment(post.data)}
                    </li>
                    <li className="flex  items-center gap-2">
                      <BsEye />
                      {post?.view} views
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <nav className="flex justify-between items-center mt-6">
            <li
              className={` list-none page-title ${currentPage === 1 ? "disabled" : ""}`}
            >
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2 bg-gray-100 text-gray-700 py-2 px-4 rounded hover:text-blue-600 hover:shadow-xl hover:bg-gray-200"
              >
                <FaArrowLeft />
                Previous
              </button>
            </li>
            <div className="flex space-x-2">
              {pageNumber?.map((number) => (
                <li className="list-none " key={number}>
                  <button
                    onClick={() => setCurrentPage(number)}
                    className={`${
                      currentPage === number
                        ? "bg-blue-500 text-white" // Highlight the active page
                        : "bg-gray-500 text-white"
                    } py-2 px-4 rounded`}
                  >
                    {number}
                  </button>
                </li>
              ))}
            </div>
            <li
              className={` list-none page-title ${currentPage === totalpages ? "disabled" : ""}`}
            >
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalpages}
                className="flex items-center gap-2 bg-gray-100 text-gray-700 py-2 px-4 rounded hover:text-blue-600 hover:shadow-xl hover:bg-gray-200"
              >
                Previous
                <FaArrowRight />
              </button>
            </li>
          </nav>
        </div>
      </section>

      <section className="bg-gray-100 py-5 mb-3 mt-3">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Categories</h2>
          </div>
          <div className="flex flex-wrap -mx-2">
            {/* Card */}
            {category.map((cat) => (
              <div key={cat?.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden text-center">
                  <img
                    src={cat.image}
                    alt=""
                    className="w-full h-20 object-fit"
                  />
                  <div className="mt-3 pb-2">
                    <h5 className="text-lg font-medium">{cat.title}</h5>
                    <small className="text-gray-500">
                      {cat.post_count || "0"}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="p-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <div>
              <a href="#" className="block">
                {/* <img src="assets/images/adv-3.png" alt="image" className="w-full" /> */}
              </a>
              <h2 className="text-left mt-2 text-2xl font-semibold">
                Latest Articles 🕒
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="card bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={`https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2.jpg`}
                    alt="Card image"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold mb-3">
                    <a
                      href="post-single.html"
                      className="text-gray-800 hover:text-blue-600 transition"
                    >
                      7 common mistakes everyone makes while traveling
                    </a>
                  </h4>
                  <ul className="text-sm space-y-2">
                    <li>
                      <a href="#" className="text-gray-500 hover:text-gray-800">
                        <i className="fas fa-user mr-2"></i> Louis Ferguson
                      </a>
                    </li>
                    <li className="text-gray-500">
                      <i className="fas fa-calendar mr-2"></i> Mar 07, 2022
                    </li>
                    <li className="text-gray-500">
                      <i className="fas fa-eye mr-2"></i> 10 Views
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <nav className="flex items-center justify-between mt-6">
            <button className="btn btn-primary text-gray-600 hover:text-gray-900 px-4 py-2 rounded">
              <i className="fas fa-arrow-left mr-2"></i> Previous
            </button>
            <div className="flex space-x-2">
              <button className="btn bg-blue-500 text-white px-3 py-1 rounded">
                1
              </button>
              <button className="btn bg-gray-200 text-gray-700 px-3 py-1 rounded">
                2
              </button>
            </div>
            <button className="btn btn-primary text-gray-600 hover:text-gray-900 px-4 py-2 rounded">
              Next <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </nav>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default index;
