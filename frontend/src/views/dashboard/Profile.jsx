import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
import {  FaUserGear } from "react-icons/fa6";
import { SiCheckmarx } from "react-icons/si";
import useUserData from "../../plugin/useUserData";
import apiInstance from "../../utils/Axios";
import Toast from "../../plugin/Toast"

function Profile() {

      const [profileData, setProfileData] = useState({
        image: null,
        full_name: "",
        about: "",
        bio: "",
        country: "",
    });
    const user_id = useUserData()?.user_id;

    const [imagePreview, setImagePreview] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchProfile = async () => {
        try {
            const response = await apiInstance.get(`/user/profile/${user_id}/`)
        setProfileData(response.data)
        } catch (error) {
            console.log(error);
            
        }
    };

  

    const handleProfileChange = (event) => {
        setProfileData({
            ...profileData,
            [event.target.name]: event.target.value,
        });
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setProfileData({
            ...profileData,
            [event.target.name]: selectedFile,
        });

        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview(reader.result);
        };
        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        const formdata = new FormData();
        
        // Only add image if it's a new file
        if (profileData.image instanceof File) {
            formdata.append("image", profileData.image);
        }
        
        // Append other fields
        formdata.append("full_name", profileData.full_name);
        formdata.append("about", profileData.about);
        formdata.append("bio", profileData.bio);
        formdata.append("country", profileData.country);
    
        try {
            const res = await apiInstance.patch(`/user/profile/${user_id}/`, formdata);
            Toast("success", "Profile Updated Successfully");
            fetchProfile(); // Refresh profile data
        } catch (error) {
            console.error("Error updating profile:", error);
            Toast("error", "Failed to update profile. Please try again.");
        }
    };
    
    
    useEffect(() => {
        fetchProfile();
    }, []);
    console.log(profileData);

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
                                <div className="px-4 py-3">
                                    <h3 className="text-xl font-semibold mb-2">Profile Details</h3>
                                    <p className="text-sm text-gray-500">You have full control to manage your own account setting.</p>
                                </div>
                                {/* Form */}
                                <div className="px-4 py-3">
                                    {/* Avatar Section */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <img
                                                src={imagePreview || profileData.image}
                                                id="img-uploaded"
                                                className="w-24 h-24 rounded-full object-cover"
                                                alt="avatar"
                                            />
                                            <div className="ml-4">
                                                <h4 className="text-lg font-semibold">Your avatar</h4>
                                                <p className="text-sm text-gray-500">PNG or JPG no bigger than 800px wide and tall.</p>
                                                <input
                                                    type="file"
                                                    className="mt-3 block w-full border border-gray-300 rounded-md px-3 py-2"
                                                    name="image"
                                                    id=""
                                                    onChange={handleFileChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-5" />
                                    {/* Personal Details Section */}
                                    <div>
                                        <h4 className="text-lg font-semibold flex items-center">
                                         <FaUserGear   className="text-blue-700"/> Personal Details
                                        </h4>
                                        <p className="text-sm text-gray-500 mt-2">Edit your personal information and address.</p>
                                        <div className="space-y-4 mt-4">
                                            <div>
                                                <label className="block text-sm font-medium" htmlFor="fname">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="full_name"
                                                    onChange={handleProfileChange}
                                                    value={profileData?.full_name || ""}
                                                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                                    placeholder="What's your full name?"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium" htmlFor="bio">
                                                    Bio
                                                </label>
                                                <input
                                                    type="text"
                                                    name="bio"
                                                    value={profileData?.bio || ""}
                                                    onChange={handleProfileChange}
                                                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                                    placeholder="Write a catchy bio!"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium" htmlFor="aboutMe">
                                                    About Me
                                                </label>
                                                <textarea
                                                    id="aboutMe"
                                                    name="about"
                                                    value={profileData?.about || ""}
                                                    onChange={handleProfileChange}
                                                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                                    placeholder="Tell us about yourself..."
                                                    rows="5"
                                                ></textarea>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium" htmlFor="country">
                                                    Country
                                                </label>
                                                <input
                                                    type="text"
                                                    name="country"
                                                    value={profileData?.country || ""}
                                                    onChange={handleProfileChange}
                                                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                                    placeholder="What country are you from?"
                                                    required
                                                />
                                            </div>
                                            <div className="mt-4">
                                                <button
                                                    type="button"
                                                    onClick={handleFormSubmit}
                                                    className="w-full sm:w-auto px-6 py-3 uppercase flex items-center gap-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                                                >
                                                    Update Profile <SiCheckmarx />
                                                </button>
                                            </div>
                                        </div>
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

export default Profile;
