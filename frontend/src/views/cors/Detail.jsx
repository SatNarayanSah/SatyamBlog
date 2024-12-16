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
    
    const {name,value} = event.target;
    console.log(name,value);
    setCreateComment(prevState => ({
      ...prevState,
      [name]: value
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
      <section className="mt-5">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="col-12">
              <a
                href="#"
                className="badge bg-red-500 mb-2 text-decoration-none text-white"
              >
                <i className="small font-bold " />
                Lifestyle
              </a>
              <h1 className="text-center text-3xl font-bold">{post.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container mx-auto px-4">
          <div className="flex">
            <div className="lg:w-2/12">
              <div className="text-start lg:text-center mb-5 sticky top-20">
                <div className="relative">
                  <div className="avatar flex justify-center avatar-xl">
                    <img
                      className="avatar-img w-24 h-24 object-cover rounded-full"
                      src={post?.profile?.image}
                      alt="avatar"
                    />
                  </div>
                  <a
                    href="#"
                    className="h5 font-bold text-dark mt-2 mb-0 block"
                  >
                    {post?.user?.full_name}
                  </a>
                  <p> {post.profile?.bio || ""} </p>
                </div>

                <hr className="hidden lg:block" />

                <ul className="list-none">
                  <li className="my-2">
                    <i className="fas fa-calendar"></i> {Moment(post.date)}
                  </li>
                  {/* <li className="my-2">
                    <i className="fas fa-clock"></i> 5 min read
                  </li> */}
                  <li className="my-2 gap-2 flex items-center">
                    <a href="#" className="flex items-center ">
                      <FaHeart />
                    </a>
                    {post.likes?.length} likes
                  </li>
                  <li className="my-2 flex items-center gap-2">
                    <FaEye />
                    {post.view} Views
                  </li>
                </ul>

                {/* Tags */}
                <ul className="list-inline text-blue-500 mt-3 text-start">
                  {tags?.map((tag, index) => (
                    <li className="inline-block mr-2" key={index}>
                      <a
                        className="text-body text-decoration-none font-bold"
                        href="#"
                      >
                        #{tag}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-5">
                  <div className="bg-blue-800 rounded-md ">
                    <button
                      onClick={handleLikePost}
                      className=" flex items-center gap-2 p-2 rounded-xl  text-white"
                    >
                      {" "}
                      <FaThumbsUp /> {post?.likes?.length}
                    </button>
                  </div>
                  <div className="bg-green-800 rounded-md">
                    <button
                      onClick={handleBookmarPost}
                      className="p-2 flex items-center gap-2 text-white shadow-xl"
                    >
                      {" "}
                      <FaBookmark /> {post?.bookmark?.length} 1
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Left sidebar END */}

            {/* Main Content START */}
            <div className="lg:w-10/12 mb-5 text-justify">
              {post.description}

              <div className="mt-5">
                <h2 className="my-3 flex items-center text-3xl font-bold gap-3">
                  <BsSymmetryVertical />
                  Related post
                </h2>
                <section className="pt-4 pb-0">
                  <div className="container">
                    <div className="flex flex-wrap -mx-3">
                      <div className="sm:w-1/2 lg:w-1/4 px-3 mb-4">
                        <div className="card">
                          <div className="card-img relative">
                            <img
                              className="w-full h-40 object-cover"
                              src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/kitchen-and-dining-room-P5JHHM6.jpg"
                              alt="Card image"
                            />
                          </div>
                          <div className="card-body p-3 pt-3">
                            <h4 className="card-title">
                              <Link
                                to={`/7-common-mistakes-everyone-makes-while-travelling/`}
                                className="text-reset text-decoration-none font-bold"
                              >
                                7 common mistakes everyone makes while traveling
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div className="sm:w-1/2 lg:w-1/4 px-3 mb-4">
                        <div className="card">
                          <div className="card-img relative">
                            <img
                              className="w-full h-40 object-cover"
                              src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/black-woman-smiling-with-hands-in-hair-PMCFL93-1.jpg"
                              alt="Card image"
                            />
                          </div>
                          <div className="card-body p-3 pt-3">
                            <h4 className="card-title">
                              <a
                                href="post-single.html"
                                className="text-reset text-decoration-none font-bold"
                              >
                                7 common mistakes everyone makes while traveling
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div className="sm:w-1/2 lg:w-1/4 px-3 mb-4">
                        <div className="card">
                          <div className="card-img relative">
                            <img
                              className="w-full h-40 object-cover"
                              src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/flat-with-touch-of-creativity-PX387LV-2.jpg"
                              alt="Card image"
                            />
                          </div>
                          <div className="card-body p-3 pt-3">
                            <h4 className="card-title">
                              <a
                                href="post-single.html"
                                className="text-reset text-decoration-none font-bold"
                              >
                                7 common mistakes everyone makes while traveling
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div className="sm:w-1/2 lg:w-1/4 px-3 mb-4">
                        <div className="card">
                          <div className="card-img relative">
                            <img
                              className="w-full h-40 object-cover"
                              src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/young-handsome-afro-black-man-going-upstairs-from-PJWPWPR-2.jpg"
                              alt="Card image"
                            />
                          </div>
                          <div className="card-body p-3 pt-3">
                            <h4 className="card-title">
                              <a
                                href="post-single.html"
                                className="text-reset text-decoration-none font-bold"
                              >
                                7 common mistakes everyone makes while traveling
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* <hr /> */}
              {/* <div className="flex py-4 justify-between">
                <div className="btn-group">
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/prev-post"
                  >
                    <i className="fa fa-arrow-left" /> Previous Post
                  </Link>
                  <Link
                    className="text-blue-500 hover:underline"
                    to="/next-post"
                  >
                    Next Post <i className="fa fa-arrow-right" />
                  </Link>
                </div>
              </div> */}

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {" "}
                  {post?.comments?.length} Comments{" "}
                </h3>
                {post.comments?.map((c, index) => (
                  <div
                    className="my-4 flex bg-gray-100 p-3 mb-3 rounded-lg"
                    key={index}
                  >
                    {/* <img
                    className="avatar avatar-md rounded-full mr-3"
                    src="https://img.freepik.com/free-photo/front-portrait-woman-with-beauty-face_186202-6146.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710979200&semt=ais"
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                    alt="avatar"
                  /> */}
                    <div>
                      <div className="mb-2">
                        <h5 className="m-0 text-lg font-medium"> {c?.name} </h5>
                        <span className="me-3 text-sm text-gray-600">
                          {Moment(c?.date)}
                        </span>
                      </div>
                      <p className="font-semibold">{c?.comment}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comments END */}

              {/* Reply START */}
              <div className="bg-gray-100 p-3 rounded-lg mt-6">
                <h3 className="text-lg font-semibold mb-3">Leave a reply</h3>
                <small className="text-sm text-gray-600">
                  Your email address will not be published. Required fields are
                  marked *
                </small>

                <form
                  onSubmit={handleCreateCommentSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3"
                >
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Name *
                    </label>
                    <input
                      required
                      value={setCreateComment.full_name}
                      name="full_name"
                      onChange={handleCreateCommentChanage}
                      type="text"
                      className="mt-1 w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <input
                      required
                      value={setCreateComment.email}
                      name="email"
                      onChange={handleCreateCommentChanage}
                      type="email"
                      className="mt-1 w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Comment *
                    </label>
                    <textarea
                      required
                      value={setCreateComment.comment}
                      name="comment"
                      onChange={handleCreateCommentChanage}
                      className="mt-1 w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm"
                    ></textarea>
                  </div>
                  <div className="col-span-2">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg "
                    >
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
              {/* Reply END */}
            </div>
            {/* Main Content END */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Detail;
