import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


function Footer() {
    return (
        <footer className="bg-[#35478a] z-100 py-5">
            <div className="flex flex-col container mx-auto md:flex-row items-center text-center md:text-left  card card-header">
                {/* Left Section */}
                <div className="md:w-1/3 mb-3 md:mb-0 text-white">
                    <div className="text-primary-hover">
                        2019 - 2024{" "}
                        <a
                            href="https://satnarayansah.github.io/"
                            className="text-reset btn-link ms-2 me-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            satyamBlog
                        </a>
                        | All rights reserved
                    </div>
                </div>

                {/* Middle Section (Logo) */}
                <div className="md:w-1/3 mb-3 md:mb-0 flex justify-center">
                    <img src="/blog-logo.png" className="w-52" alt="footer logo" />
                </div>

                {/* Right Section (Social Links) */}
                <div className="md:w-1/3 flex justify-center md:justify-end">
                    <ul className="flex space-x-4">
                        <li>
                            <a
                                href="https://facebook.com/desphixs"
                                className="text-white hover:text-blue-400 text-2xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook/>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/desphixs"
                                className="text-white hover:text-blue-400 text-2xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://youtube.com/@desphixs"
                                className="text-white hover:text-red-500 text-2xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaYoutube />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
