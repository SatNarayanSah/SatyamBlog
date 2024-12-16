import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
import { IoGrid } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight, FaCalendar, FaEye, FaUser } from "react-icons/fa6";

function Category() {
    return (
        <div>
            <Header />
            <section className="p-0">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="w-full md:w-1/2 lg:w-1/4">
                            {/* <a href="#" className="block">
                                <img src="assets/images/adv-3.png" alt="Advertisement" className="w-full h-auto" />
                            </a> */}
                            <h2 className="flex items-center gap-2 mt-2 text-lg font-semibold md:text-xl">
                                <IoGrid className="text-blue-700"/> LifeStyle (16 Articles)
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-4 pb-0 mt-4">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {/* Card 1 */}
                        <div className="border rounded-md overflow-hidden mb-4">
                            <div className=" relative">
                                <img className="w-full h-40 object-cover" src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2.jpg" alt="Card image" />
                            </div>
                            <div className=" px-3 pt-3">
                                <h4 className=" text-lg font-bold">
                                    <a href="#" className="text-reset no-underline hover:underline">
                                        7 common mistakes everyone makes while traveling
                                    </a>
                                </h4>
                                <ul className="mt-3 space-y-2 text-sm">
                                    <li>
                                        <a href="#" className="flex items-center gap-2 hover:text-gray-700">
                                            <FaUser/>Louis Ferguson
                                        </a>
                                    </li>
                                    <li  className="flex items-center gap-2 hover:text-gray-700 cursor-pointer">
                                        <FaCalendar/> Mar 07, 2022
                                    </li>
                                    <li  className="flex items-center gap-2 hover:text-gray-700 cursor-pointer">
                                        <FaEye/> 10 Views
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="border rounded-md overflow-hidden mb-4">
                            <div className=" relative">
                                <img className="w-full h-40 object-cover" src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/yellow-and-gray-industrial-office-PFDQ5CR-1.jpg" alt="Card image" />
                            </div>
                            <div className=" px-3 pt-3">
                                <h4 className="text-lg font-bold">
                                    <a href="#" className="text-reset no-underline hover:underline">
                                        7 common mistakes everyone makes while traveling
                                    </a>
                                </h4>
                                <ul className="mt-3 space-y-2 text-sm">
                                    <li>
                                        <a href="#" className="flex items-center gap-2 hover:text-gray-700">
                                            <FaUser/>Louis Ferguson
                                        </a>
                                    </li>
                                    <li  className="flex items-center gap-2 hover:text-gray-700 cursor-pointer">
                                        <FaCalendar/> Mar 07, 2022
                                    </li>
                                    <li  className="flex items-center gap-2 hover:text-gray-700 cursor-pointer">
                                        <FaEye/> 10 Views
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="border rounded-md overflow-hidden mb-4">
                            <div className=" relative">
                                <img className="w-full h-40 object-cover" src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/loft-office-with-vintage-decor-PFD2JSL-1.jpg" alt="Card image" />
                            </div>
                            <div className=" px-3 pt-3">
                                <h4 className=" text-lg font-bold">
                                    <a href="#" className="text-reset no-underline hover:underline">
                                        7 common mistakes everyone makes while traveling
                                    </a>
                                </h4>
                                <ul className="mt-3 space-y-2 text-sm">
                                    <li>
                                        <a href="#" className="flex items-center gap-2 hover:text-gray-700">
                                            <FaUser/>Louis Ferguson
                                        </a>
                                    </li>
                                    <li  className="flex items-center gap-2 hover:text-gray-700 cursor-pointer">
                                        <FaCalendar/> Mar 07, 2022
                                    </li>
                                    <li  className="flex items-center gap-2 hover:text-gray-700 cursor-pointer">
                                        <FaEye/> 10 Views
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="border rounded-md overflow-hidden mb-4">
                            <div className=" relative">
                                <img className="w-full h-40 object-cover" src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/glacier-ice-cave-of-iceland-PWYAVUU-1.jpg" alt="Card image" />
                            </div>
                            <div className=" px-3 pt-3">
                                <h4 className=" text-lg font-bold">
                                    <a href="post-single.html" className="text-reset no-underline hover:underline">
                                        7 common mistakes everyone makes while traveling
                                    </a>
                                </h4>
                                <ul className="mt-3 space-y-2 text-sm">
                                    <li>
                                        <a href="#" className="flex items-center gap-2 hover:text-gray-700">
                                            <FaUser/>Louis Ferguson
                                        </a>
                                    </li>
                                    <li  className="flex items-center gap-2 hover:text-gray-700 cursor-pointer">
                                        <FaCalendar/> Mar 07, 2022
                                    </li>
                                    <li  className="flex items-center gap-2 hover:text-gray-700 cursor-pointer">
                                        <FaEye/> 10 Views
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    <nav className="d-flex mt-4">
                        <ul className="pagination flex justify-center space-x-4">
                            <li className="">
                                <button className="flex items-center gap-2 border hover:bg-blue-200 hover:text-white font-bold rounded-lg px-4 py-2">
                                    <FaArrowLeft/>
                                    Previous
                                </button>
                            </li>
                            <li className="active">
                                <button className=" font-bold rounded-lg px-4 py-2">1</button>
                            </li>
                            <li>
                                <button className=" font-bold rounded-lg px-4 py-2">2</button>
                            </li>
                            <li className="">
                            <button className="flex items-center gap-2 border hover:bg-blue-200 hover:text-white font-bold rounded-lg px-4 py-2">
                                    Previous
                                    <FaArrowRight/>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Category;
