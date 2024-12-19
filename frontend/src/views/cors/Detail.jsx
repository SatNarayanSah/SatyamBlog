import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link, useParams } from "react-router-dom";
import apiInstance from "../../utils/Axios";
import Moment from "../../plugin/Moment";
import { FaBookmark, FaEye, FaHeart, FaThumbsUp } from "react-icons/fa6";
import { BsSymmetryVertical } from "react-icons/bs";
import Toast from "../../plugin/Toast";
import { create } from "zustand";
import { CiHeart } from "react-icons/ci";
import DOMPurify from "dompurify";
import { SERVER_URL } from "../../utils/constants";
function Detail() {
  const [post, setPost] = useState([]);
  const [tags, setTags] = useState([]);
  const param = useParams();
  const [createComment, setCreateComment] = useState({
    full_name: "",
    email: "",
    comment: "",
  });

  const fetchPost = async () => {
    const response = await apiInstance.get(`post/details/${param.slug}/`);
    setPost(response.data);

    const tagArray = response?.data?.tags?.split(",");
    setTags(tagArray);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const sanitizedHTML = DOMPurify.sanitize(post.description);

  const handleCreateCommentChanage = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setCreateComment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleCreateCommentSubmit = async (event) => {
    console.log(event);
    console.log(createComment);

    event.preventDefault();

    const json = {
      post_id: post?.id,
      name: createComment.full_name,
      email: createComment.email,
      comment: createComment.comment,
    };
    const response = await apiInstance.post(`/post/comemnt-post/`, json);
    Toast("success", "Comment Posted");
    fetchPost();
    setCreateComment({
      full_name: "",
      email: "",
      comment: "",
    });
  };

  const handleLikePost = async () => {
    const json = {
      user_id: 1,
      post_id: post?.id,
    };
    const response = await apiInstance.post(`/post/like-post/`, json);
    Toast("success", response.data.message);
    fetchPost();
  };

  const handleBookmarPost = async () => {
    const json = {
      user_id: 1,
      post_id: post?.id,
    };
    const response = await apiInstance.post(`/post/bookmark-post/`, json);
    Toast("success", response.data.message);
    fetchPost();
  };

  return (
    <>
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Author Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex flex-col items-center">
                <img
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-50"
                  src={`${SERVER_URL}${post?.user_profile?.image}`}
                  alt={post?.user_profile?.full_name}
                />
                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  {post?.user_profile?.full_name}
                </h3>
                <p className="text-gray-600 text-center mt-2">{post.profile?.bio || ""}</p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-gray-600">
                  <span className="flex items-center gap-2">
                    <FaHeart className="text-red-500" />
                    {post.likes?.length} likes
                  </span>
                  <span className="flex items-center gap-2">
                    <FaEye className="text-blue-500" />
                    {post.view} views
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handleLikePost}
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
                  >
                    <FaThumbsUp /> {post?.likes?.length}
                  </button>
                  <button
                    onClick={handleBookmarPost}
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition"
                  >
                    <FaBookmark /> {post?.bookmark?.length}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Article Header */}
            <div className="mb-8">
              <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">
                Lifestyle
              </span>
              <h1 className="mt-4 text-4xl font-bold text-gray-900 leading-tight">
                {post.title}
              </h1>
              <time className="text-gray-600 mt-2 block">
                {Moment(post.date)}
              </time>
            </div>

            {/* Featured Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-xl shadow-lg mb-8 object-cover"
              style={{ maxHeight: "500px" }}
            />

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
            />

            {/* Comments Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">
                {post?.comments?.length} Comments
              </h3>
              <div className="space-y-6">
                {post.comments?.map((comment, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">{comment.name}</h4>
                        <time className="text-sm text-gray-600">
                          {Moment(comment.date)}
                        </time>
                      </div>
                    </div>
                    <p className="text-gray-700">{comment.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Comment Form */}
            <div className="mt-12 bg-gray-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Leave a reply</h3>
              <form onSubmit={handleCreateCommentSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      required
                      name="full_name"
                      value={createComment.full_name}
                      onChange={handleCreateCommentChanage}
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={createComment.email}
                      onChange={handleCreateCommentChanage}
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comment *
                  </label>
                  <textarea
                    required
                    name="comment"
                    value={createComment.comment}
                    onChange={handleCreateCommentChanage}
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Detail;
