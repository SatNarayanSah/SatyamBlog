import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

function Contact() {
    return (
        <>
            <Header />
            <section className="mt-5">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold">Contact us</h1>
                    </div>
                </div>
            </section>

            {/* Contact info START */}
            <section className="pt-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-9/12 mx-auto">
                        <iframe 
                        className="w-full h-96 border border-green-500 shadow-lg rounded-xl"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114005.90603660498!2d85.85439921586595!3d26.754440372065858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec4005fb138bb9%3A0x533a64cf0e13c2d1!2sJanakpur!5e0!3m2!1sen!2snp!4v1733836791537!5m2!1sen!2snp" ></iframe>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
                                <div className="mb-5">
                                    <h3 className="text-2xl font-semibold">Contact Information</h3>
                                    <address className="text-lg">45600, Janakpur, Dhanusha, Nepal</address>
                                    <p className="text-lg">
                                        Call:{" "}
                                        <a href="tel:+977-9812039791" className="text-blue-500 font-bold">
                                        +977-9812039791
                                        </a>
                                    </p>
                                    <p className="text-lg">
                                        Email:{" "}
                                        <a href="mailto:satyamsah086@gmail.com" className="text-blue-500 font-bold ">
                                        satyamsah086@gmail.com
                                        </a>
                                    </p>
                                    <p className="text-lg">
                                        Support time: Monday to Saturday
                                        <br />
                                        9:30 am to 6:00 pm
                                    </p>
                                </div>
                                {/* <div className="mb-5">
                                    <h3 className="text-2xl font-semibold">Contact Information</h3>
                                    <p className="text-lg">Get in touch with us to see how we can help you with your query</p>
                                    <address className="text-lg">45600, Janakpur, Dhanusha, Nepal</address>
                                    <p className="text-lg">
                                        Call:{" "}
                                        <a href="tel:+1234567890" className="text-blue-500 underline">
                                            +123 4567 890 (Toll-free)
                                        </a>
                                    </p>
                                    <p className="text-lg">
                                        Email:{" "}
                                        <a href="mailto:desphixs@gmail.com" className="text-blue-500 underline">
                                            desphixs@gmail.com
                                        </a>
                                    </p>
                                    <p className="text-lg">
                                        Support time: Monday to Saturday
                                        <br />
                                        9:00 am to 5:30 pm
                                    </p>
                                </div> */}
                            </div>

                            <hr className="my-5" />

                            <div className="mb-5">
                                <h2 className="text-3xl font-semibold">Send us a message</h2>
                                <p className="text-lg">Please fill in the form below and we will contact you very soon. Your email address will not be published.</p>

                                {/* Form START */}
                                <form className="contact-form mt-5" id="contact-form" name="contactform" method="POST">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="mb-4">
                                            <input
                                                required
                                                id="con-name"
                                                name="name"
                                                type="text"
                                                className="form-input w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <input
                                                required
                                                id="con-email"
                                                name="email"
                                                type="email"
                                                className="form-input w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="E-mail"
                                            />
                                        </div>
                                        <div className="mb-4 col-span-2">
                                            <input
                                                required
                                                id="con-subject"
                                                name="subject"
                                                type="text"
                                                className="form-input w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Subject"
                                            />
                                        </div>
                                        <div className="mb-4 col-span-2">
                                            <textarea
                                                required
                                                id="con-message"
                                                name="message"
                                                cols="40"
                                                rows="6"
                                                className="form-textarea w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Message"
                                            />
                                        </div>
                                        <div className="col-span-2 text-left">
                                            <button
                                                type="submit"
                                                className="btn w-full py-3 px-6 text-white bg-blue-500 hover:bg-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                Send Message <i className="fas fa-paper-plane ml-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                {/* Form END */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Contact;
