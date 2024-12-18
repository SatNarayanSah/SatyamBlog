import React, { useState, useEffect } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { IoChatboxEllipses, IoCheckmarkDoneOutline } from "react-icons/io5"; // Import icons
import apiInstance from "../../utils/axios";
import useUserData from "../../plugin/useUserData";
import Toast from "../../plugin/Toast";
import Moment from "../../plugin/Moment";
import { FaBookmark, FaThumbsUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Notifications() {
  const [noti, setNoti] = useState([]);
  const [comment, setComments] = useState([]);
  const user_id = useUserData()?.user_id;

  const fetchNoti = async () => {
    try {
      const response = await apiInstance.get(
        `author/dashboard/noti-list/${user_id}/`
      );
      setNoti(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMarkNotiAsSeen = async (notiId) => {
    try {
      const response = await apiInstance.post(
        "author/dashboard/noti-mark-seen/",
        { noti_id: notiId }
      );
      console.log(response.data);
      Toast("success", "Notification Seen", "");
      fetchNoti(); // Refetch notifications after marking it as seen
    } catch (error) {
      console.log("Error marking notification as seen: ", error);
      Toast("error", "Error marking notification as seen", "");
    }
  };

  useEffect(() => {
    fetchNoti();
  }, []);
  return (
    <>
      <Header />
      <section className="pt-5 pb-5">
        <div className="container mx-auto px-4">
          <div className="mt-0 md:mt-4">
            <div className="w-full lg:w-8/12 mx-auto">
              {/* Card */}
              <div className="bg-white shadow-lg rounded-lg mb-4">
                {/* Card header */}
                <div className="flex items-center justify-between px-4 py-3">
                  <div>
                    <h3 className="text-xl font-semibold">Notifications</h3>
                    <span className="text-sm text-gray-500">
                      Manage all your notifications from here
                    </span>
                  </div>
                </div>
                {/* Card body */}
                <div className="px-4 py-3">
                  <ul className="space-y-4">
                    {/* List group item */}
                    {noti?.map((n) => (
                      <li
                        key={n?.id || n?.notification_id}
                        className="bg-gray-50 p-4 shadow-md rounded-lg"
                      >
                        <div className="flex items-start">
                          <div className="ml-4 mt-2 w-full">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-bold tracking-widest items-center gap-3">
                                  {n?.type === "Like" && (
                                    <>
                                      <p className="flex text-blue-300 items-center gap-4">
                                        <FaThumbsUp /> New Like
                                      </p>
                                      <p className="mt-3">
                                        Someone just Liked your post{" "}
                                        <b>{n?.post?.title || "Untitled"}</b>
                                      </p>
                                    </>
                                  )}
                                  {n?.type === "Comment" && (
                                    <>
                                      <p className="flex text-green-300 items-center gap-4">
                                        <IoChatboxEllipses /> New Comment
                                      </p>
                                      <p className="mt-3">
                                        Someone just commented on your post{" "}
                                        <Link to={`/details${n?.post?.slug}`}>
                                        <b>
                                          {n?.post?.title || "Untitled post"}
                                        </b>
                                        </Link>
                                      </p>
                                    </>
                                  )}
                                  {n?.type === "Bookmark" && (
                                    <>
                                      <p className="flex text-red-300 items-center gap-4">
                                        <FaBookmark /> New Bookmark
                                      </p>
                                      <p className="mt-3">
                                        Someone just Bookmarked your post{" "}
                                        <b>{n?.post?.title || "Untitled"}</b>
                                      </p>
                                    </>
                                  )}
                                </h4>
                              </div>
                            </div>
                            <div className="mt-2">
                              <p className="mt-1">
                                <span className="font-semibold">
                                  Date:{" "}
                                  <span className="font-light">
                                    {n?.date ? Moment(n.date) : "No date"}
                                  </span>
                                </span>
                              </p>
                              <p>
                                <button
                                  className="flex items-center gap-2 text-gray-600 border border-gray-300 rounded-md px-4 py-2"
                                  onClick={() => handleMarkNotiAsSeen(n.id)} // Attach function to button
                                >
                                  Mark as Seen{" "}
                                  <IoCheckmarkDoneOutline className="text-blue-700 font-bold text-xl" />
                                </button>
                              </p>
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

export default Notifications;
