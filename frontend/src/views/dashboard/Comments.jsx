import React, { useState, useEffect } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import apiInstance from "../../utils/axios";
import Moment from "../../plugin/Moment";
import Toast from "../../plugin/Toast";
import useUserData from "../../plugin/useUserData";

function Comments() {
    const [comments, setComments] = useState([]);
    const [reply, setReply] = useState("");
    const [activeReplyId, setActiveReplyId] = useState(null); // State to track the active reply form
    const user_id = useUserData()?.user_id;

    const fetchComment = async () => {
        const response = await apiInstance.get(`author/dashboard/comment-list/${user_id}`);
        setComments(response.data);
    };

    useEffect(() => {
        fetchComment();
    }, []);

    const handleSubmitReply = async (commentId) => {
        try {
            const response = await apiInstance.post(`author/dashboard/reply-comment/`, {
                comment_id: commentId,
                reply: reply,
            });
            console.log(response.data);
            fetchComment();
            Toast("success", "Reply Sent.", "");
            setReply("");
            setActiveReplyId(null); // Close the form after submitting
        } catch (error) {
            console.log(error);
        }
    };

    const handleToggleReply = (commentId) => {
        setActiveReplyId(activeReplyId === commentId ? null : commentId); // Toggle the active form
    };

    return (
        <>
            <Header />
            <section className="pt-5 pb-5">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col mt-0 md:mt-4">
                        <div className="w-full lg:w-10/12 mx-auto">
                            {/* Card */}
                            <div className="bg-white shadow-md rounded-lg mb-4">
                                {/* Card header */}
                                <div className="p-4 border-b border-gray-200 flex flex-col lg:flex-row justify-between items-start lg:items-center">
                                    <h3 className="text-xl font-semibold mb-2 lg:mb-0">Comments</h3>
                                    <span className="text-sm text-gray-600">You have full control to manage your own comments.</span>
                                </div>
                                {/* Card body */}
                                <div className="p-4">
                                    {/* List group */}
                                    <ul className="space-y-4">
                                        {comments?.map((c, index) => (
                                            <li key={index} className="p-4 shadow rounded-lg bg-gray-50">
                                                <div className="flex flex-col md:flex-row">
                                                    <img
                                                        src="https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
                                                        alt="avatar"
                                                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                                                    />
                                                    <div className="md:ml-4 mt-3 md:mt-0 flex-1">
                                                        <div className="flex flex-col sm:flex-row justify-between">
                                                            <div>
                                                                <h4 className="font-semibold text-lg">{c.name}</h4>
                                                                <span className="text-sm text-gray-500">{Moment(c.date)}</span>
                                                            </div>
                                                        </div>
                                                        <div className="mt-2">
                                                            <p className="flex items-center gap-2 text-gray-700">
                                                                <span className="font-semibold">Comment:</span>
                                                                {c.comment}
                                                            </p>
                                                            <p className="flex items-center gap-2 mt-2 text-gray-700">
                                                                <span className="font-semibold">Response:</span>
                                                                {c.reply ? (
                                                                    c.reply
                                                                ) : (
                                                                    <span className="text-red-600">No Reply</span>
                                                                )}
                                                            </p>
                                                            <button
                                                                className="mt-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                                                type="button"
                                                                onClick={() => handleToggleReply(c.id)} // Toggle reply form visibility
                                                            >
                                                                Send Response
                                                            </button>
                                                            {activeReplyId === c.id && ( // Show form only if it's the active one
                                                                <div className="mt-4">
                                                                    <div className="bg-white p-4 rounded-md shadow-md">
                                                                        <div className="mb-3">
                                                                            <label
                                                                                htmlFor={`replyInput${c.id}`}
                                                                                className="block text-sm font-medium text-gray-700"
                                                                            >
                                                                                Write Response
                                                                            </label>
                                                                            <textarea
                                                                                id=""
                                                                                 onChange={(e) => setReply(e.target.value)}
                                                                                value={reply}
                                                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                                rows="4"
                                                                                placeholder="Type your reply here"
                                                                            ></textarea>
                                                                        </div>
                                                                        <button
                                                                            onClick={() => handleSubmitReply(c?.id)}
                                                                            type="button"
                                                                            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                        >
                                                                            Send Response
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
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

export default Comments;
