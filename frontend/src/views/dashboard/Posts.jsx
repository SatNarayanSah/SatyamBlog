import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { FaPencil, FaPlus, FaTrash } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import apiInstance from "../../utils/Axios";
import useUserData from "../../plugin/useUserData";
import Moment from "../../plugin/Moment";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const user_id = useUserData()?.user_id;
  const fetchPost = async () => {
    try {
      const post_res = await apiInstance.get(
        `/author/dashboard/post-list/${user_id}/`
      );
      setPosts(post_res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    if (query === "") {
      fetchPost();
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
    fetchPost();
  }, []);

  return (
    <>
      <Header />
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="grid gap-4">
            <div className="col-span-12">
              <div className="bg-white border rounded-lg shadow">
                <div className="border-b p-4 flex justify-between items-center">
                  <h5 className="text-lg font-semibold">
                    All Blog Posts{" "}
                    <span className="bg-blue-200 text-blue-800 px-3  rounded-md">
                      {posts?.length}
                    </span>
                  </h5>
                  <Link to='/add-post/'>
                  <button className="bg-blue-500 text-white text-sm py-2 px-4 rounded flex items-center gap-2">
                    Add New <FaPlus />
                  </button>
                  </Link>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="relative">
                        <input
                          type="search"
                          onChange={(e) => handleSearch(e)}
                          className="w-full border outline-none bg-gray-50 rounded pl-4 pr-10 py-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Search Articles"
                        />
                        <button className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500">
                          <FaSearch />
                        </button>
                      </div>
                    </div>
                    <div>
                      <select
                        onChange={handleSortChange}
                        className="w-full border bg-gray-50 rounded outline-none py-2 px-4 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Sort by</option>
                        <option value={"Newest"}>Newest</option>
                        <option value={"Oldest"}>Oldest</option>
                      </select>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto bg-white border">
                      <thead className="bg-gray-800 text-white">
                        <tr>
                          <th className="px-4 py-2 text-left">Article Name</th>
                          <th className="px-4 py-2 text-left">Views</th>
                          <th className="px-4 py-2 text-left">
                            Published Date
                          </th>
                          <th className="px-4 py-2 text-left">Category</th>
                          <th className="px-4 py-2 text-left">Status</th>
                          <th className="px-4 py-2 text-left">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {posts?.map((p) => (
                          <tr key={p?.id} className="border-b">
                            <td className="px-4 py-2">
                              <Link
                                to={`/details/${p.slug}/`}
                                className="text-blue-600 hover:underline"
                              >
                                {p?.title}
                              </Link>
                            </td>
                            <td className="px-4 py-2"> {p?.view} Views</td>
                            <td className="px-4 py-2"> {Moment(p.date)} </td>
                            <td className="px-4 py-2">
                              {" "}
                              {p?.category?.title}{" "}
                            </td>
                            <td className="px-4 py-2">
                              <span className="bg-green-100 text-green-600 px-2 py-1 text-xs rounded">
                                {p?.status}
                              </span>
                            </td>
                            <td>
                              <div className="flex gap-2">
                                {/* Edit Button */}
                                <Link
                                  to={`/edit-post/${p?.id}/`}
                                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-3 rounded-md"
                                  title="Edit"
                                >
                                  <FaPencil />
                                </Link>

                                {/* Delete Button */}
                                <button
                                  className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-3 rounded-md"
                                  title="Delete"
                                >
                                  <FaTrash />
                                </button>
                              </div>
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

export default Posts;
