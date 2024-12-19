import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
import useUserData from "../../plugin/useUserData";
import apiInstance from "../../utils/Axios";
import Moment from "../../plugin/Moment";


import {
  IoCalendar,
  IoChatbubbleEllipses,
  IoEye,
  IoGrid,
} from "react-icons/io5";

import {
  BsFillPeopleFill,
  BsFilePostFill,
  BsHeartFill,
  BsBookmarkCheckFill,
} from "react-icons/bs";
import { FaBell, FaPencil, FaPlus, FaThumbsUp, FaTrash } from "react-icons/fa6";
import { FaCheckCircle, FaSearch } from "react-icons/fa";
import moment from "moment";

//

function Dashboard() {
  const [stats, setStats] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState([]);
  const [noti, setNoti] = useState([]);

  const user_id = useUserData()?.user_id;
  const fetchDashboardData = async () => {
    const state_res = await apiInstance.get(
      `/author/dashboard/stats/${user_id}/`
    );
    setStats(state_res.data[0]);

    const post_res = await apiInstance.get(
      `/author/dashboard/post-list/${user_id}/`
    );
    setPosts(post_res?.data);

    const comment_res = await apiInstance.get(
      `/author/dashboard/comment-list/${user_id}/`
    );
    setComment(comment_res?.data);

    const noti_res = await apiInstance.get(
      `/author/dashboard/noti-list/${user_id}/`
    );
    setNoti(noti_res?.data);
  };
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    if (query === "") {
      posts();
    } else {
      const filtered = posts.filter((p) => {
        return p.title.toLowerCase().includes(query);
      });
      setPosts(filtered);
    }
  };
  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    const sortedPosts = [...posts];
    if (sortValue === "Newest") {
      sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortValue === "Oldest") {
      sortedPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    setPosts(sortedPosts);
  };
  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <>
      <Header />
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <div className="flex flex-wrap justify-between gap-6">
                {/* Total Views Card */}
                <div className="sm:w-1/2 lg:w-1/5 p-3 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="border p-5 rounded-lg">
                    <div className="flex items-center">
                      <div className="text-green-700 bg-opacity-10 bg-green-400 p-4 rounded-full text-3xl">
                        <BsFillPeopleFill />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {stats?.views}
                        </h3>
                        <h6 className="text-sm text-gray-500 mb-0">
                          Total Views
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Posts Card */}
                <div className="sm:w-1/2 lg:w-1/5 p-3 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="border p-5 rounded-lg">
                    <div className="flex items-center">
                      <div className="text-blue-700 bg-opacity-10 bg-blue-400 p-4 rounded-full text-3xl">
                        <BsFilePostFill />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {stats?.posts}
                        </h3>
                        <h6 className="text-sm text-gray-500 mb-0">Posts</h6>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Likes Card */}
                <div className="sm:w-1/2 lg:w-1/5 p-3 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="border p-5 rounded-lg">
                    <div className="flex items-center">
                      <div className="text-red-700 bg-opacity-10 bg-red-400 p-4 rounded-full text-3xl">
                        <BsHeartFill />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {stats?.likes}
                        </h3>
                        <h6 className="text-sm text-gray-500 mb-0">Likes</h6>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bookmarks Card */}
                <div className="sm:w-1/2 lg:w-1/5 p-3 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="border p-5 rounded-lg">
                    <div className="flex items-center">
                      <div className="text-teal-700 bg-opacity-10 bg-teal-400 p-4 rounded-full text-3xl">
                        <BsBookmarkCheckFill />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {stats?.bookmark}
                        </h3>
                        <h6 className="text-sm text-gray-500 mb-0">
                          Bookmarks
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 justify-center ">
              {/* Latest Posts Section */}
              <div className="md:w-1/2 2xl:w-1/4 bg-white border rounded-lg shadow-md hover:shadow-xl">
                <div className="flex justify-between items-center border-b p-4">
                  <h5 className="font-semibold text-gray-800">Latest Posts</h5>
                  <button className="p-1 focus:outline-none">
                    <span className="text-red-500 text-xl">
                      <IoGrid />
                    </span>
                  </button>
                </div>
                <div className="p-4">
                  <div className="mb-4 last:mb-0">
                    {posts?.slice(0, 3).map((p, index) => {
                      return (
                        <>
                          <div className="flex items-center" key={index}>
                            <img
                              className="rounded-lg object-cover w-24 h-28"
                              src={p?.image}
                              alt="product"
                            />
                            <div className="ml-3">
                              <a
                                href={p?.slug}
                                className="block font-semibold text-gray-800 hover:underline"
                              >
                                {p?.title || "Post Title"}
                              </a>
                              <p className="text-sm flex items-center gap-2 text-gray-500 mt-1">
                                <IoCalendar className="text-blue-500" />
                                {Moment(p?.created_at)}
                              </p>
                              <p className="text-sm flex items-center gap-2 text-gray-500">
                                <IoEye /> {p?.view} Views
                              </p>
                            </div>
                          </div>
                          <hr className="my-3" />
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="border-t text-center p-3 h-10 flex items-baseline justify-center  ">
                  <Link
                    to="/posts/"
                    className="text-gray-800  font-semibold hover:underline"
                  >
                    View all Posts
                  </Link>
                </div>
              </div>

              {/* Recent Comments Section */}
              <div className="md:w-1/2 2xl:w-1/4 bg-white border rounded-lg shadow-md hover:shadow-xl">
                <div className="flex justify-between items-center border-b p-4">
                  <h5 className="font-semibold text-gray-800">
                    Recent Comments
                  </h5>
                  <button className="p-1 focus:outline-none">
                    <IoChatbubbleEllipses className="text-green-500 text-xl" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="mb-4 last:mb-0">
                    {comment?.slice(0, 3)?.map((c, index) => {
                      return (
                        <>
                          <div className="flex items-center">
                            <img
                              className="w-10 h-10 object-cover rounded-md"
                              src={c?.image || "/comment-user.png"}
                              alt="avatar"
                            />
                            <div className="ml-3">
                              <a
                                href="#"
                                className="block text-lg font-semibold text-gray-800 hover:underline"
                              >
                                {c?.comment}
                              </a>
                              <p className="text-sm text-gray-500">
                                <i>by {c?.name || "comenter"}</i>
                              </p>
                            </div>
                          </div>
                          <hr className="my-3" />
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="border-t text-center p-3">
                  <Link
                    to="/comments/"
                    className="text-gray-800 font-semibold hover:underline"
                  >
                    View all Comments
                  </Link>
                </div>
              </div>

              {/* Notifications Section */}
              <div className="md:w-1/2 2xl:w-1/4 bg-white border rounded-lg shadow-md hover:shadow-xl">
                <div className="flex justify-between items-center border-b p-4">
                  <h5 className="font-semibold text-gray-800">Notifications</h5>
                  <button className="p-1 focus:outline-none">
                    <FaBell className="text-yellow-500 text-xl" />
                  </button>
                </div>
                <div className="p-4 h-96 overflow-y-auto">
                  {noti?.slice(0, 3)?.map((n, index) => (
                    <div className="col-12" key={index}>
                      <div className="flex justify-between relative">
                        <div className="flex items-center">
                          <div className="bg-opacity-15 rounded-2 flex-shrink-0">
                            {n?.type === "Like" && (
                              <FaThumbsUp className="text-primary text-xl" />
                            )}
                          </div>
                          <div className="bg-opacity-15 rounded-2 flex-shrink-0">
                            {n?.type === "Comment" && (
                              <IoChatbubbleEllipses className="text-success text-xl" />
                            )}
                          </div>
                          <div className="bg-opacity-15 rounded-2 flex-shrink-0">
                            {n?.type === "Bookmark" && (
                              <BsBookmarkCheckFill className="text-danger text-xl" />
                            )}
                          </div>
                          <div className="ms-0 sm:ms-3 mt-2 sm:mt-0">
                            <h6 className="mb-0">{n?.type}</h6>
                            <span className="mb-0">
                              {n?.type === "Like" && (
                                <span>
                                  Someone liked your post{" "}
                                  <b>{n?.posts?.title?.slice(0, 30) + "..."}</b>
                                </span>
                              )}
                              {n?.type === "Comment" && (
                                <span>
                                  You have a new comment on{" "}
                                  <b>{n?.posts?.title?.slice(0, 30) + "..."}</b>
                                </span>
                              )}
                              {n?.type === "Bookmark" && (
                                <span>
                                  Someone bookmarked your post{" "}
                                  <b>{n?.posts?.title?.slice(0, 30) + "..."}</b>
                                </span>
                              )}
                            </span>
                            <span className="text-sm"><br></br> {Moment(n.data)} </span>
                            <br />
                            <button
                              onClick={() => handleMarkNotiAsSeen(n?.id)}
                              className="bg-green-600 text-white rounded-md p-2 mt-2"
                            >
                              <FaCheckCircle/>
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr className="my-3" />
                    </div>
                  ))}
                </div>
                <div className="border-t text-center p-3">
                  <Link
                    to="/notification/"
                    className="text-gray-800 font-semibold hover:underline"
                  >
                    View all Notifications
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-12">
              <div className="border bg-transparent rounded-lg">
                {/* Header */}
                <div className="bg-transparent border-b p-4 flex justify-between items-center">
                  <h5 className="text-lg font-semibold">
                    All Blog Posts
                    <span className="ml-2 px-2 py-1 text-sm bg-blue-100 text-blue-500 rounded">
                      5
                    </span>
                  </h5>
                  <button className="bg-blue-600 text-white p-2 flex items-center gap-3 rounded-md shadow-lg font-bold">
                    Add New <FaPlus />
                  </button>
                </div>
                {/* Search and Filter */}
                <div className="p-4 grid grid-cols-1 items-center md:grid-cols-2 gap-4 w-full">
                  <div>
                    <form className="relative w-full">
                      <input
                        type="search"
                        onChange={(e) => handleSearch(e)}
                        placeholder="Search Articles"
                        className="w-full form-input bg-transparent border outline-none p-4 pr-10"
                      />
                      <button
                        type="submit"
                        onChange={handleSortChange}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        <FaSearch />
                      </button>
                    </form>
                  </div>
                  <div>
                    <select className="form-select bg-transparent border p-4 outline-none w-full">
                      <option value="">Sort by</option>
                      <option>Newest</option>
                      <option>Oldest</option>
                      <option>------</option>
                      <option>Active</option>
                      <option>Draft</option>
                      <option>Disabled</option>
                    </select>
                  </div>
                </div>

                {/* Blog List Table */}
                <div className="overflow-x-auto">
                  <table className="table-auto w-full text-left border-collapse">
                    <thead className="bg-gray-800 text-white">
                      <tr>
                        <th className="px-4 py-2">Article Name</th>
                        <th className="px-4 py-2">Views</th>
                        <th className="px-4 py-2">Published Date</th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts?.map((p, index) => (
                        <tr key={index} className="border-b">
                          <td className="px-4 py-2">
                            <a
                              href="#"
                              className="text-blue-600 hover:underline"
                            >
                              {p?.title}
                            </a>
                          </td>
                          <td className="px-4 py-2"> {p?.view} Views</td>
                          <td className="px-4 py-2"> {Moment(p.date)} </td>
                          <td className="px-4 py-2"> {p?.category?.title} </td>
                          <td className="px-4 py-2">
                            <span className="bg-green-100 text-green-600 px-2 py-1 text-xs rounded">
                              {p?.status}
                            </span>
                          </td>
                          <td className="px-4 py-2 flex gap-2">
                            <button
                              className="text-red-600 hover:text-red-800"
                              title="Delete"
                            >
                              <FaTrash />
                            </button>
                            <button
                              className="text-blue-600 hover:text-blue-800"
                              title="Edit"
                            >
                              <FaPencil />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Dashboard;
