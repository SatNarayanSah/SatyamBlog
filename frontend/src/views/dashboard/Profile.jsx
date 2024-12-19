import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { FaUserGear } from "react-icons/fa6";
import { SiCheckmarx } from "react-icons/si";
import useUserData from "../../plugin/useUserData";
import apiInstance from "../../utils/Axios";
import Toast from "../../plugin/Toast";

function Profile() {
    const [profileData, setProfileData] = useState({
        image: null,
        full_name: "",
        about: "",
        bio: "",
        country: "",
        facebook: "",
        twitter: ""
    });
    const user_id = useUserData()?.user_id;
    const [imagePreview, setImagePreview] = useState("");
    const [loading, setLoading] = useState(false);

    // Fetch profile data
    const fetchProfile = async () => {
        try {
            if (!user_id) {
                console.error("User ID is missing.");
                return;
            }
            const response = await apiInstance.get(`/user/profile/${user_id}/`);
            setProfileData(response.data);
            if (response.data.image) {
                setImagePreview(response.data.image);
            }
        } catch (error) {
            console.error("Failed to fetch profile:", error);
            Toast("error", "Failed to fetch profile data");
        }
    };

    // Handle profile data changes
    const handleProfileChange = (event) => {
        setProfileData({
            ...profileData,
            [event.target.name]: event.target.value,
        });
    };

    // Handle image file change and preview
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            if (!selectedFile.type.match(/^image\/(jpeg|jpg|png)$/)) {
                Toast("error", "Please select a valid image file (JPG or PNG)");
                return;
            }
            if (selectedFile.size > 800 * 1024) {
                Toast("error", "Image size should be less than 800KB");
                return;
            }
            setProfileData({ ...profileData, image: selectedFile });
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    // Handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const formdata = new FormData();

            if (profileData.image instanceof File) {
                formdata.append("image", profileData.image);
            }

            if (!profileData.full_name?.trim()) {
                throw new Error("Full name is required");
            }

            Object.keys(profileData).forEach(key => {
                if (key !== 'image' && profileData[key]) {
                    formdata.append(key, profileData[key]);
                }
            });

            const response = await apiInstance.patch(
                `/user/profile/${user_id}/`,
                formdata,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            if (response.status === 200) {
                Toast("success", "Profile Updated Successfully");
                await fetchProfile(); // Refresh profile data
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            Toast(
                "error", 
                error.response?.data?.message || error.message || "Failed to update profile. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    // Use effect to fetch profile data on mount
    useEffect(() => {
        if (user_id) {
            fetchProfile();
        } else {
            console.error("User ID is missing.");
        }
    }, [user_id]);

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
                                                    onChange={handleFileChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-5" />
                                    {/* Personal Details Section */}
                                    <div>
                                        <h4 className="text-lg font-semibold flex items-center">
                                            <FaUserGear className="text-blue-700" /> Personal Details
                                        </h4>
                                        <p className="text-sm text-gray-500 mt-2">Edit your personal information and address.</p>
                                        <div className="space-y-4 mt-4">
                                            <div>
                                                <label className="block text-sm font-medium" htmlFor="fname"> Full Name </label>
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
                                                <label className="block text-sm font-medium" htmlFor="bio"> Bio </label>
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
                                                <label className="block text-sm font-medium" htmlFor="aboutMe"> About Me </label>
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
                                                <label className="block text-sm font-medium" htmlFor="country"> Country </label>
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
                                            {/* Social Media Links Section */}
                                            <div>
                                                <label className="block text-sm font-medium" htmlFor="facebook"> Facebook </label>
                                                <input
                                                    type="text"
                                                    name="facebook"
                                                    value={profileData?.facebook || ""}
                                                    onChange={handleProfileChange}
                                                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                                    placeholder="Enter your Facebook link"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium" htmlFor="twitter"> Twitter... </label>
                                                <input
                                                    type="text"
                                                    name="twitter"
                                                    value={profileData?.twitter || ""}
                                                    onChange={handleProfileChange}
                                                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                                    placeholder="Enter your Twitter link"
                                                />
                                            </div>
                                            <div className="mt-4">
                                                <button 
                                                  type='submit' 
                                                  onClick={handleFormSubmit} 
                                                  className={`w-full sm:w-auto px-6 py-3 uppercase flex items-center gap-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
                                                  disabled={loading}>
                                                  {loading ? "Updating..." : "Update Profile"} 
                                                  <SiCheckmarx />
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
