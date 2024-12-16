import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle  } from "react-icons/fa";
import apiInstance from "../../utils/axios";
import useUserData from "../../plugin/useUserData";
import Toast from "../../plugin/Toast";
import Swal from "sweetalert2";

function AddPost() {
  const [post, setCreatePost] = useState({
    image: "",
    title: "",
    description: "",
    category: "",
    tags: "",
    status: "Active",
  });
  const [imagePreview, setImagePreview] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const userId = useUserData()?.user_id;
  const navigate = useNavigate();

  // Fetch categories
  const fetchCategory = async () => {
    try {
      const response = await apiInstance.get(`/post/category/list/`);
      setCategoryList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  // Handle input changes
  const handleCreatePostChange = (event) => {
    setCreatePost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  // Handle file input and preview
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(selectedFile);

      setCreatePost((prev) => ({
        ...prev,
        image: { file: selectedFile, preview: reader.result },
      }));
    }
  };

  // Handle form submission
  const handleCreatePost = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (!post.title || !post.description || !post.image.file) {
      Toast("error", "All fields are required");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("user_id", userId);
    formData.append("title", post.title);
    formData.append("image", post.image.file);
    formData.append("description", post.description);
    formData.append("tags", post.tags);
    formData.append("category", post.category);
    formData.append("post_status", post.status);

    try {
      const response = await apiInstance.post(
        "/author/dashbord/post-created/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setIsLoading(false);
      Swal.fire({ icon: "success", title: "Post created successfully" });
      navigate("/posts/");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section className="pt-5 pb-5">
        <div className="container mx-auto px-4">
          <div className="mt-0 md:mt-4">
            <div className="w-full lg:w-8/12 mx-auto">
              <>
                <section className="py-4 lg:py-6 bg-primary rounded-3xl">
                  <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                      <div className="mb-4 lg:mb-0">
                        <h1 className="text-white text-2xl lg:text-3xl font-semibold mb-1">
                          Create Blog Post
                        </h1>
                        <p className="text-white text-lg">
                          Use the article builder below to write your article.
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Link
                          to=""
                          className="border text-back flex items-center gap-1 px-4 py-2 rounded-md"
                        >
                          <FaArrowLeft /> Back to Posts
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
                <form onSubmit={handleCreatePost} className="pb-8 mt-5">
                  <div className="card mb-3">
                    {/* Basic Info Section */}
                    <div className="card-header border-b px-4 py-3">
                      <h4 className="text-xl font-semibold">
                        Basic Information
                      </h4>
                    </div>
                    <div className="card-body">
                      <label htmlFor="postThumbnail" className="form-label">
                        Preview
                      </label>
                      <img
                        className="w-full h-80 object-cover rounded-lg mb-4"
                        src={
                          imagePreview ||
                          "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
                        }
                        alt="Preview"
                      />

                      <div className="mb-3">
                        <label htmlFor="postThumbnail" className="form-label">
                          Thumbnail
                        </label>
                        <input
                          id="postThumbnail"
                          name="file"
                          onChange={handleFileChange}
                          className="form-control w-full py-2 px-4 border border-gray-300 rounded-md"
                          type="file"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                          className="form-control w-full py-2 px-4 border border-gray-300 rounded-md"
                          type="text"
                          name="title"
                          onChange={handleCreatePostChange}
                          placeholder="Write a 60-character post title."
                        />
                        <small>Write a 60-character post title.</small>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Post Category</label>
                        <select
                          className="form-select w-full py-2 px-4 border border-gray-300 rounded-md"
                          name="category"
                          onChange={handleCreatePostChange}
                        >
                          <option value="">Select a category</option>
                          {categoryList.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.title}
                            </option>
                          ))}
                        </select>
                        <small>
                          Help people find your posts by choosing categories
                          that represent your post.
                        </small>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Post Description</label>
                        <textarea
                          name="description"
                          onChange={handleCreatePostChange}
                          className="form-control w-full py-2 px-4 border border-gray-300 rounded-md"
                          rows="10"
                        ></textarea>
                        <small>A brief summary of your posts.</small>
                      </div>

                      <div>
                        <label htmlFor="" className="">
                          Status
                        </label>
                        <select
                          name="status"
                          onChange={handleCreatePostChange}
                          className="w-full py-2 px-4 border outline-none border-gray-300 rounded-md"
                        >
                          <option value="Active">Active</option>
                          <option value="Draft">Draft</option>
                          <option value="Disabled">Disabled</option>
                        </select>
                      </div>

                      <label className="mt-4">Tags</label>
                      <input
                        className="form-control w-full py-2 px-4 border border-gray-300 rounded-md"
                        type="text"
                        onChange={handleCreatePostChange}
                        name="tags"
                        placeholder="health, medicine, fitness"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-blue-500 text-white flex items-center justify-center gap-2 w-full py-3 mt-2 rounded-md"
                  >
                    {isLoading ? "Creating..." : "Create Post"}{" "}
                    <FaCheckCircle className="text-green-500" />
                  </button>
                </form>
              </>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AddPost;
