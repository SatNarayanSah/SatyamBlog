import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
import { BsCalendar, BsEye, BsHeart } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import apiInstance from "../../utils/Axios";
import Moment from "../../plugin/Moment";

function Category() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Fetch all posts and categories
  const fetchPostsAndCategories = async () => {
    try {
      const responsePosts = await apiInstance.get("post/lists/");
      const responseCategories = await apiInstance.get("post/category/list");
      setPosts(responsePosts.data);
      setCategories(responseCategories.data);
      setFilteredPosts(responsePosts.data); // Show all posts initially
    } catch (error) {
      console.error("Error fetching posts and categories:", error);
    }
  };

  // Filter posts based on selected category
  const filterPostsByCategory = (categorySlug) => {
    setSelectedCategory(categorySlug);
    if (categorySlug) {
      const filtered = posts.filter(
        (post) => post.category?.slug === categorySlug
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts); // Reset to all posts if no category is selected
    }
  };

  useEffect(() => {
    fetchPostsAndCategories();
  }, []);

  return (
    <div>
      <Header />
      <div className="p-4 container mx-auto">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 py-5">
          <button
            onClick={() => filterPostsByCategory(null)}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === null
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => filterPostsByCategory(category.slug)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category.slug
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="flex flex-wrap gap-8">
          <section className="pt-4 pb-0">
            <div className="px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <div
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                      key={post.id}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image || "https://via.placeholder.com/150"}
                          alt={post.title || "No Image"}
                          className="w-full h-40 object-cover"
                        />
                        <div className="absolute bg-white top-3 right-3 p-2 rounded-md text-lg font-bold text-blue-500">
                          {post.category?.title || "No Category"}
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
                        <ul className="mt-3 space-y-2 text-gray-600">
                          <li className="flex font-bold tracking-widest items-center gap-2">
                            <FaUserAlt />
                            {post.user?.full_name || "Author"}
                          </li>
                          <li className="flex items-center gap-2">
                            <BsCalendar />
                            {Moment(post.created_at)}
                          </li>
                          <li className="flex items-center gap-2">
                            <BsEye />
                            {post.view || 0} views
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500">
                    No posts available for this category.
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Category;
