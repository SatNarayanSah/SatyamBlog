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
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
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

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const postItems = posts?.slice(indexOfFirstItem, indexOfLastItem);
  const totalpages = Math.ceil(posts?.length / itemsPerPage);
  const pageNumber = Array.from(
    { length: totalpages },
    (_, index) => index + 1
  );
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    if (query === "") {
      fetchPosts();
    } else {
      const filtered = posts.filter((p) => {
        return p.title.toLowerCase().includes(query);
      });
      setPosts(filtered);
    }
  };
  return (
    <>
      <Header />
      <section className="p-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 m-8">
            <div className="text-6xl font-bold text-center">
              <span className="text-blue-950">SatyamBlog:</span> Inspiring
              minds, Connecting Hearts
            </div>
            <div className="text-center text-xl tracking-wider opacity-55">
              SatyamBlog: Your Gateway to Inspiring Stories and Fresh
              Perspectives – Dive into curated content that informs, entertains,
              and connects a global community of passionate readers.
            </div>
          </div>
          <hr />
          <div className="m-8">
            <div className="text-center uppercase tracking-widest font-bold opacity-55">
              explore trending topics
            </div>
            <div>
              <section className=" py-5 mb-3 mt-3">
                <div className="container mx-auto px-4">
                  <div className="mb-4">
                    {/* <h2 className="text-xl font-bold">Categories</h2> */}
                  </div>
                  <div className="flex flex-wrap items-center justify-center -mx-2">
                    {/* Card */}
                    {category.map((cat) => (
                      <div
                        key={cat?.id}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-4"
                      >
                        <Link to={`/categories/`}>
                          <div className="bg-white w-full rounded-lg flex shadow-lg p-3 gap-3  overflow-hidden justify-center text-center">
                            <img
                              src={cat.image}
                              alt={cat.slug}
                              className="w-16 h-16 object-fit"
                            />
                            <div className="  items-center  ">
                              <h5 className="text-lg font-medium">
                                {cat.title}
                              </h5>
                              <small className="text-blue-500 text-lg">
                                {cat.post_count || "0"}
                              </small>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
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
                Latest Blogs 📟
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-0">
        <div className="container mx-auto  ">
          <div
            className="flex   justify-center gap-4
          "
          >
            <div className="grid grid-cols-1 w-4/5 sm:grid-cols-2 lg:border-r-4 px-5 lg:grid-cols-3 gap-6">
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
                    <div className="absolute bg-white top-3 right-3 p-2 rounded-md text-lg font-bold text-blue-500">
                      {post?.category?.title}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-2">
                      <Link
                        to={`/details/${post.slug}/`}
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
                        {post?.user?.full_name || "Author"}
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

            <div className=" p-5 h-fit shadow-xl rounded-lg overflow-hidden w-1/5">
              <form className="w-full max-w-sm">
                  {/* <label htmlFor="search">Search Posts</label> */}
                <div className="flex flex-wrap justify-center items-center border-b border-teal-500 py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-blue-500"
                    type="text"
                    onChange={(e) => handleSearch(e)}
                    placeholder="Search Posts"
                    aria-label="Full name"
                  />
                  <button
                    className="flex items-center gap-3 mt-5 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button"
                  >
                    Search <FaSearch />
                  </button>
                 
                </div>
              </form>
            </div>
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
                Next
                <FaArrowRight />
              </button>
            </li>
          </nav>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default index;
