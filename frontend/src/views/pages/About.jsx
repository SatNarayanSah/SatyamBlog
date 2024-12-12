import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

function About() {
    return (
        <>
            <Header />

            <section className="pt-4 pb-0">
                <div className="container mx-auto px-4">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h2 className="text-3xl text-center uppercase  font-semibold mb-4">Our story</h2>
                            <p className="text-lg text-gray-700 text-justify mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus suscipit porro dignissimos quae hic doloribus deleniti voluptatibus in totam quasi quos omnis maiores, nam sint! In laborum architecto natus magnam sunt quasi neque aperiam, enim commodi totam
                                nam nostrum.
                            </p>
                            <p className="text-gray-700 mb-4 text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus, sapiente facere harum molestiae, quas aperiam nulla eius, cupiditate deserunt accusantium magni! Necessitatibus saepe cupiditate facilis, sint est quod hic maxime aliquam, et impedit
                                optio nihil, magnam libero ipsa quia expedita possimus. Unde corrupti asperiores, facilis dolorum ea doloremque sunt suscipit cupiditate officiis deleniti neque fuga eos rerum nulla aperiam incidunt praesentium quae tenetur officia fugiat magnam architecto, maiores
                                est corporis. Autem possimus maiores nam hic tempora, impedit nemo a ad quidem? Voluptates, similique ut molestiae suscipit fugiat labore laudantium saepe incidunt facere. Vitae cupiditate ipsum et sed quia earum, consequatur atque quos dolore sunt beatae dolorum
                                harum error aperiam dolores a ab eveniet animi. Doloribus minus quod aperiam maiores ex nulla eius perferendis inventore libero, sint dolore incidunt cupiditate excepturi omnis id eaque sit nemo vitae, in dolor molestias velit! In, aliquam! Possimus eum blanditiis hic
                                enim illo quasi quod. Incidunt, esse? Molestiae optio sed quaerat minus, magnam eius accusamus odit nam nulla porro similique itaque sit, alias qui odio cupiditate totam laboriosam eos ratione minima. Amet sed alias nobis, soluta molestiae, suscipit possimus
                                doloremque quod omnis delectus velit dolore repudiandae et iure exercitationem odio quia quae temporibus minus!
                            </p>
                            <h3 className="mt-4 text-2xl font-semibold">We do this across:</h3>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in.</li>
                                <li>Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</li>
                                <li>
                                    Mr feeling does chiefly cordial in do.{" "}
                                    <a href="#" className="text-blue-500 underline">
                                        Water timed folly right aware if oh truth.
                                    </a>{" "}
                                    Imprudence attachment him his for sympathize. Large above be to means.
                                </li>
                                <li>Dashwood does provide stronger is. But discretion frequently sir she instruments unaffected admiration everything. Meant balls it if up doubt small purse.</li>
                            </ul>
                            <h3 className="mt-5 mb-3 text-2xl uppercase text-center font-bold">Our team</h3>
                            <div className="flex flex-wrap justify-center sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className=" flex flex-col items-center">
                                    <div className=" mb-2 mx-auto">
                                        <img
                                            className="avatar-img rounded-full w-64 h-64 outline outline-green-800 object-cover"
                                            src="https://satnarayansah.github.io/images/satyam.jpg"
                                            alt="avatar"
                                        />
                                    </div>
                                    <h5 className="font-bold mt-2 text-3xl ">Sat Narayan Sah</h5>
                                    <p className="text-md tracking-widest text-blue-600">Full-Stack Developer </p>
                                </div>
                                
                            </div>

                            <h3 className="mt-5 mb-3 text-2xl font-semibold">What we do</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="mb-4">
                                    <img
                                        className="rounded-lg w-full h-44 object-cover"
                                        src="https://www.aspistrategist.org.au/wp-content/uploads/2023/11/GettyImages-467714941-1024x764.jpg"
                                        alt="Card image"
                                    />
                                    <h4 className="mt-3 text-lg font-semibold">Global news services</h4>
                                    <p>Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among.</p>
                                </div>
                                <div className="mb-4">
                                    <img
                                        className="rounded-lg w-full h-44 object-cover"
                                        src="https://www.varletmachines.com/sites/default/files/styles/large/public/2022-04/Commercial.png?itok=jE81FZ_E"
                                        alt="Card image"
                                    />
                                    <h4 className="mt-3 text-lg font-semibold">Commercial services</h4>
                                    <p>Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
                                </div>
                                <div className="mb-4">
                                    <img
                                        className="rounded-lg w-full h-44 object-cover"
                                        src="https://www.columbiasouthern.edu/media/azmjow33/fire-ems-cj-public-service.jpg"
                                        alt="Card image"
                                    />
                                    <h4 className="mt-3 text-lg font-semibold">Public services</h4>
                                    <p>Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had.</p>
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

export default About;
