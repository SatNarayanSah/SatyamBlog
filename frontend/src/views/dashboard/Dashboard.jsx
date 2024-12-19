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

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Latest Posts Section */}
              <div className="bg-white rounded-lg border border-gray-100">
                <div className="flex justify-between items-center p-4 border-b">
                  <h5 className="font-medium text-gray-900">Latest Posts</h5>
                  <IoGrid className="text-gray-400" />
                </div>
                <div className="divide-y">
                  {posts?.slice(0, 3).map((p, index) => (
                    <div className="p-4" key={index}>
                      <div className="flex gap-4">
                        <img
                          className="rounded-lg object-cover w-24 h-28"
                          src={p?.image}
                          alt="product"
                        />
                        <div>
                          <a
                            href={`/details/${p?.slug}`}
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
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t text-center">
                  <Link to="/posts/" className="text-blue-600 hover:text-blue-700 font-medium">
                    View all Posts
                  </Link>
                </div>
              </div>

              {/* Recent Comments Section */}
              <div className="bg-white rounded-lg border border-gray-100">
                <div className="flex justify-between items-center p-4 border-b">
                  <h5 className="font-medium text-gray-900">Recent Comments</h5>
                  <IoChatbubbleEllipses className="text-gray-400" />
                </div>
                <div className="divide-y">
                  {comment?.slice(0, 3)?.map((c, index) => (
                    <div className="p-4" key={index}>
                      <div className="flex gap-4">
                        <img
                          className="w-10 h-10 object-cover rounded-full"
                          src={c?.image || "/comment-user.png"}
                          alt="avatar"
                        />
                        <div>
                          <p className="text-gray-900">{c?.comment}</p>
                          <p className="text-sm text-gray-500 mt-1">by {c?.name || "commenter"}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t text-center">
                  <Link to="/comments/" className="text-blue-600 hover:text-blue-700 font-medium">
                    View all Comments
                  </Link>
                </div>
              </div>

              {/* Notifications Section */}
              <div className="bg-white rounded-lg border border-gray-100">
                <div className="flex justify-between items-center p-4 border-b">
                  <h5 className="font-medium text-gray-900">Notifications</h5>
                  <FaBell className="text-gray-400" />
                </div>
                <div className="divide-y max-h-[32rem] overflow-y-auto">
                  {noti?.slice(0, 3)?.map((n, index) => (
                    <div className="p-4" key={index}>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          {n?.type === "Like" && <FaThumbsUp className="text-blue-500" />}
                          {n?.type === "Comment" && <IoChatbubbleEllipses className="text-green-500" />}
                          {n?.type === "Bookmark" && <BsBookmarkCheckFill className="text-purple-500" />}
                        </div>
                        <div>
                          <h6 className="text-gray-900 font-medium">{n?.type}</h6>
                          <p className="text-sm text-gray-600 mt-1">
                            {n?.type === "Like" && (
                              <span>Someone liked your post <b>{n?.posts?.title?.slice(0, 30)}...</b></span>
                            )}
                            {n?.type === "Comment" && (
                              <span>New comment on <b>{n?.posts?.title?.slice(0, 30)}...</b></span>
                            )}
                            {n?.type === "Bookmark" && (
                              <span>Someone bookmarked <b>{n?.posts?.title?.slice(0, 30)}...</b></span>
                            )}
                          </p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-sm text-gray-500">{Moment(n.data)}</span>
                            <button
                              onClick={() => handleMarkNotiAsSeen(n?.id)}
                              className="text-green-600 hover:text-green-700"
                              title="Mark as read"
                            >
                              <FaCheckCircle />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t text-center">
                  <Link to="/notification/" className="text-blue-600 hover:text-blue-700 font-medium">
                    View all Notifications
                  </Link>
                </div>
              </div>

              {/* Blog List Table Section */}
              <div className="col-span-1 lg:col-span-3">
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
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Dashboard;
