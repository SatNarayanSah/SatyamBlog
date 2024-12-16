import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCircleCheck } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

function AddPost() {
    return (
        <>
            <Header />
            <section className="pt-5 pb-5">
                <div className="container mx-auto px-4">
                    <div className="row  mt-4">
                        <div className="col-12">
                            <>
                                {/* Header Section */}
                                <section className="p-8 bg-blue-300 rounded-lg">
                                    <div className="container mx-auto">
                                        <div className="flex flex-wrap justify-between items-center">
                                            <div className="mb-4">
                                                <h1 className="text-white text-2xl font-bold">Edit Blog Post</h1>
                                                <p className="text-white text-lg">Use the article builder below to edit your article.</p>
                                            </div>
                                            <div className="flex space-x-2">
                                                <Link
                                                    to="/instructor/posts/"
                                                    className="flex items-center gap-3 bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200 transition"
                                                >
                                                    <FaArrowLeft/> Back to Posts
                                                </Link>
                                                <button
                                                    className="bg-gray-800 flex items-center gap-3 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
                                                >
                                                    Save Changes <FaCircleCheck className="text-green-500"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Form Section */}
                                <section className="mt-8">
                                    <div className="bg-white shadow-md rounded-lg">
                                        <div className="border-b px-6 py-4">
                                            <h4 className="text-lg font-semibold">Basic Information</h4>
                                        </div>
                                        <div className="p-6">
                                            {/* Preview Image */}
                                            <label htmlFor="postThumbnail" className="block font-medium mb-2">
                                                Preview
                                            </label>
                                            <img
                                                className="w-full h-80 object-cover rounded-lg mb-4"
                                                src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
                                                alt="Preview"
                                            />
                                            {/* Thumbnail Upload */}
                                            <div className="mb-4">
                                                <label htmlFor="postThumbnail" className="block font-medium mb-2">
                                                    Thumbnail
                                                </label>
                                                <input
                                                    id="postThumbnail"
                                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                    type="file"
                                                />
                                            </div>

                                            {/* Title Input */}
                                            <div className="mb-4">
                                                <label className="block font-medium mb-2">Title</label>
                                                <input
                                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                    type="text"
                                                    placeholder=""
                                                />
                                                <small className="text-gray-500">Write a 60 character post title.</small>
                                            </div>

                                            {/* Category Select */}
                                            <div className="mb-4">
                                                <label className="block font-medium mb-2">Post Category</label>
                                                <select
                                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                >
                                                    <option value="">-------------</option>
                                                    <option value="Lifestyle">Lifestyle</option>
                                                    <option value="Fashion">Fashion</option>
                                                    <option value="Tech">Tech</option>
                                                    <option value="Health">Health</option>
                                                    <option value="Entertainment">Entertainment</option>
                                                </select>
                                                <small className="text-gray-500">Help people find your posts by choosing categories that represent your post.</small>
                                            </div>

                                            {/* Post Description */}
                                            <div className="mb-4">
                                                <label className="block font-medium mb-2">Post Description</label>
                                                <textarea
                                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                    rows="5"
                                                ></textarea>
                                                <small className="text-gray-500">A brief summary of your post.</small>
                                            </div>

                                            {/* Tag Input */}
                                            <div className="mb-4">
                                                <label className="block font-medium mb-2">Tag</label>
                                                <input
                                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                    type="text"
                                                    placeholder="health, medicine, fitness"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Update Button */}
                                    <button
                                        className="flex items-center justify-center gap-3 w-full bg-green-600 text-white py-3 mt-4 rounded-lg hover:bg-green-700 transition"
                                        type="button"
                                    >
                                        Update Post <FaCheckCircle/>
                                    </button>
                                </section>
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
