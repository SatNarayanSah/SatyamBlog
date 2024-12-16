import React, { useEffect } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
import {logout} from "../../utils/Auth"

    function Logout() {
        useEffect(() => {
            logout();
        }, []);
    
    return (
        <>
            <Header />
            <section className="flex flex-col justify-center items-center min-h-screen pt-24 bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">You have been logged out</h1>
                        <p className="text-gray-600 mb-6">Thanks for visiting our website, come back anytime!</p>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/login/"
                            className="w-full text-center py-3 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                        >
                            Login <i className="fas fa-sign-in-alt ml-2"></i>
                        </Link>
                        <Link
                            to="/register/"
                            className="w-full text-center py-3 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                        >
                            Register <i className="fas fa-user-plus ml-2"></i>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Logout;
