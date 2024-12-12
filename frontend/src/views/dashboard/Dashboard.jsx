import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";



import {
  BsFillPeopleFill,
  BsFilePostFill,
  BsHeartFill,
  BsBookmarkCheckFill,
} from "react-icons/bs";
// 

function Dashboard() {

 
  return (
    <>
      <Header />
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <div className="flex flex-wrap justify-between">
                <div className="sm:w-1/2 lg:w-1/5">
                  <div className="border p-3">
                    <div className="flex items-center">
                      <div className="text-green-700 bg-opacity-10 bg-green-400 p-3 rounded-full text-2xl">
                        <BsFillPeopleFill />
                      </div>
                      <div className="ml-3">
                        <h3>654</h3>
                        <h6 className="mb-0">Total Views</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sm:w-1/2 lg:w-1/5">
                  <div className="border p-3">
                    <div className="flex items-center">
                      <div className="text-blue-700 bg-opacity-10 bg-blue-400 p-3 rounded-full text-2xl">
                        <BsFilePostFill />
                      </div>
                      <div className="ml-3">
                        <h3>25</h3>
                        <h6 className="mb-0">Posts</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sm:w-1/2 lg:w-1/5">
                  <div className="border p-3">
                    <div className="flex items-center">
                      <div className="text-red-700 bg-opacity-10 bg-red-400 p-3 rounded-full text-2xl">
                        <BsHeartFill />
                      </div>
                      <div className="ml-3">
                        <h3>210</h3>
                        <h6 className="mb-0">Likes</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sm:w-1/2 lg:w-1/5">
                  <div className="border p-3">
                    <div className="flex items-center">
                      <div className="text-teal-700 bg-opacity-10 bg-teal-400 p-3 rounded-full text-2xl">
                        <BsBookmarkCheckFill />
                      </div>
                      <div className="ml-3">
                        <h3>84K</h3>
                        <h6 className="mb-0">Bookmarks</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="  md:w-1/2 2xl:w-1/3">
              <div className=" border h-full">
                <div className="card-header border-b flex justify-between items-center p-3">
                  <h5 className="card-header-title mb-0">Latest Posts</h5>
                  <div className="dropdown text-right">
                    <a
                      href="#"
                      className="btn border-0 p-0 mb-0"
                      role="button"
                      id="dropdownShare3"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-grid-fill text-red-500" />
                    </a>
                  </div>
                </div>

                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-12">
                      <div className="d-flex position-relative">
                        <img
                          className="w-60 rounded"
                          src=""
                          style={{
                            width: "100px",
                            height: "110px",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                          alt="product"
                        />
                        <div className="ms-3">
                          <a
                            href="#"
                            className="h6 stretched-link text-decoration-none text-dark"
                          >
                            Dirty little secrets about the business industry
                          </a>
                          <p className="small mb-0 mt-3">
                            <i className="fas fa-calendar me-2"></i>Jun 17, 2022
                          </p>
                          <p className="small mb-0">
                            <i className="fas fa-eye me-2"></i>10 Views
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr className="my-3" />
                    <div className="col-12">
                      <div className="d-flex position-relative">
                        <img
                          className="w-60 rounded"
                          src=""
                          style={{
                            width: "100px",
                            height: "110px",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                          alt="product"
                        />
                        <div className="ms-3">
                          <a
                            href="#"
                            className="h6 stretched-link text-decoration-none text-dark"
                          >
                            Dirty little secrets about the business industry
                          </a>
                          <p className="small mb-0 mt-3">
                            <i className="fas fa-calendar me-2"></i>Jun 17, 2022
                          </p>
                          <p className="small mb-0">
                            <i className="fas fa-eye me-2"></i>10 Views
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr className="my-3" />
                    <div className="col-12">
                      <div className="d-flex position-relative">
                        <img
                          className="w-60 rounded"
                          src=""
                          style={{
                            width: "100px",
                            height: "110px",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                          alt="product"
                        />
                        <div className="ms-3">
                          <a
                            href="#"
                            className="h6 stretched-link text-decoration-none text-dark"
                          >
                            Dirty little secrets about the business industry
                          </a>
                          <p className="small mb-0 mt-3">
                            <i className="fas fa-calendar me-2"></i>Jun 17, 2022
                          </p>
                          <p className="small mb-0">
                            <i className="fas fa-eye me-2"></i>10 Views
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-top text-center p-3">
                  <a
                    href="#"
                    className="fw-bold text-decoration-none text-dark"
                  >
                    View all Posts
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-4">
              <div className="card border h-100">
                <div className="card-header border-bottom d-flex justify-content-between align-items-center  p-3">
                  <h5 className="card-header-title mb-0">Recent Comments</h5>
                  <div className="dropdown text-end">
                    <a
                      href="#"
                      className="btn border-0 p-0 mb-0"
                      role="button"
                      id="dropdownShare3"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-chat-left-quote-fill text-success fa-fw" />
                    </a>
                  </div>
                </div>
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-12">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-lg flex-shrink-0">
                          <img
                            className="avatar-img"
                            src=""
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                              borderRadius: "50%",
                            }}
                            alt="avatar"
                          />
                        </div>
                        <div className="ms-3">
                          <p className="mb-1">
                            {" "}
                            <a
                              className="h6 stretched-link text-decoration-none text-dark"
                              href="#"
                            >
                              {" "}
                              Thanks for the post, please post regulary.{" "}
                            </a>
                          </p>
                          <div className="d-flex justify-content-between">
                            <p className="small mb-0">
                              <i>by</i> Monica Sweet
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-3" />
                    <div className="col-12">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-lg flex-shrink-0">
                          <img
                            className="avatar-img"
                            src=""
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                              borderRadius: "50%",
                            }}
                            alt="avatar"
                          />
                        </div>
                        <div className="ms-3">
                          <p className="mb-1">
                            {" "}
                            <a
                              className="h6 stretched-link text-decoration-none text-dark"
                              href="#"
                            >
                              {" "}
                              Thanks for the post, please post regulary.{" "}
                            </a>
                          </p>
                          <div className="d-flex justify-content-between">
                            <p className="small mb-0">
                              <i>by</i> Monica Sweet
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-3" />

                    <div className="col-12">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-lg flex-shrink-0">
                          <img
                            className="avatar-img"
                            src=""
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                              borderRadius: "50%",
                            }}
                            alt="avatar"
                          />
                        </div>
                        <div className="ms-3">
                          <p className="mb-1">
                            {" "}
                            <a
                              className="h6 stretched-link text-decoration-none text-dark"
                              href="#"
                            >
                              {" "}
                              Thanks for the post, please post regulary.{" "}
                            </a>
                          </p>
                          <div className="d-flex justify-content-between">
                            <p className="small mb-0">
                              <i>by</i> Monica Sweet
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-footer border-top text-center p-3">
                  <a
                    href="#"
                    className="fw-bold text-decoration-none text-dark"
                  >
                    View all Comments
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-4">
              <div className="card border h-100">
                <div className="card-header border-bottom d-flex justify-content-between align-items-center  p-3">
                  <h5 className="card-header-title mb-0">Notifications</h5>
                  <div className="dropdown text-end">
                    <a
                      href="#"
                      className="btn border-0 p-0 mb-0"
                      role="button"
                      id="dropdownShare3"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fas fa-bell text-warning fa-fw" />
                    </a>
                  </div>
                </div>
                <div className="card-body p-3">
                  <div className="custom-scrollbar h-350">
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex justify-content-between position-relative">
                          <div className="d-sm-flex">
                            <div className="icon-lg bg-opacity-15 rounded-2 flex-shrink-0">
                              <i className="fas fa-thumbs-up text-primary fs-5" />
                            </div>
                            <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
                              <h6 className="mb-0">
                                <a
                                  href="#"
                                  className="stretched-link text-decoration-none text-dark fw-bold"
                                >
                                  New Like
                                </a>
                              </h6>
                              <p className="mb-0">
                                Destiny Franks liked your post{" "}
                                <b>7 Commom mistakes...</b>
                              </p>
                              <span className="small">5 min ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="my-3" />
                      <div className="col-12">
                        <div className="d-flex justify-content-between position-relative">
                          <div className="d-sm-flex">
                            <div className="icon-lg bg-opacity-15 rounded-2 flex-shrink-0">
                              <i className="bi bi-chat-left-quote-fill text-success fs-5" />
                            </div>
                            <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
                              <h6 className="mb-0">
                                <a
                                  href="#"
                                  className="stretched-link text-decoration-none text-dark fw-bold"
                                >
                                  New Comment
                                </a>
                              </h6>
                              <p className="mb-0">
                                Joy Winter liked commented on your post{" "}
                                <b>7 Commom mistakes...</b>
                              </p>
                              <span className="small">5 min ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="my-3" />
                      <div className="col-12">
                        <div className="d-flex justify-content-between position-relative">
                          <div className="d-sm-flex">
                            <div className="icon-lg bg-opacity-15 rounded-2 flex-shrink-0">
                              <i className="bi bi-tag-fill text-danger fs-5" />
                            </div>
                            <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
                              <h6 className="mb-0">
                                <a
                                  href="#"
                                  className="stretched-link text-decoration-none text-dark fw-bold"
                                >
                                  New Bookmark
                                </a>
                              </h6>
                              <p className="mb-0">
                                Flourish Franks bookmarked your post{" "}
                                <b>7 Commom mistakes...</b>
                              </p>
                              <span className="small">5 min ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-top text-center p-3">
                  <a
                    href="#"
                    className="fw-bold text-decoration-none text-dark"
                  >
                    View all Notifications
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="card border bg-transparent rounded-3">
                <div className="card-header bg-transparent border-bottom p-3">
                  <div className="d-sm-flex justify-content-between align-items-center">
                    <h5 className="mb-2 mb-sm-0">
                      All Blog Posts{" "}
                      <span className="badge bg-primary bg-opacity-10 text-primary">
                        5
                      </span>
                    </h5>
                    <a href="#" className="btn btn-sm btn-primary mb-0">
                      Add New <i className="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row g-3 align-items-center justify-content-between mb-3">
                    <div className="col-md-8">
                      <form className="rounded position-relative">
                        <input
                          className="form-control pe-5 bg-transparent"
                          type="search"
                          placeholder="Search Articles"
                          aria-label="Search"
                        />
                        <button
                          className="btn bg-transparent border-0 px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                          type="submit"
                        >
                          <i className="fas fa-search fs-6 " />
                        </button>
                      </form>
                    </div>
                    <div className="col-md-3">
                      <form>
                        <select
                          className="form-select z-index-9 bg-transparent"
                          aria-label=".form-select-sm"
                        >
                          <option value="">Sort by</option>
                          <option>Newest</option>
                          <option>Oldest</option>
                          <option>------</option>
                          <option>Active</option>
                          <option>Draft</option>
                          <option>Disabled</option>
                        </select>
                      </form>
                    </div>
                  </div>
                  {/* Search and select END */}
                  {/* Blog list table START */}
                  <div className="table-responsive border-0">
                    <table className="table align-middle p-4 mb-0 table-hover table-shrink">
                      {/* Table head */}
                      <thead className="table-dark">
                        <tr>
                          <th scope="col" className="border-0 rounded-start">
                            Article Name
                          </th>
                          <th scope="col" className="border-0">
                            Views
                          </th>
                          <th scope="col" className="border-0">
                            Published Date
                          </th>
                          <th scope="col" className="border-0">
                            Category
                          </th>
                          <th scope="col" className="border-0">
                            Status
                          </th>
                          <th scope="col" className="border-0 rounded-end">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="border-top-0">
                        <tr>
                          <td>
                            <h6 className="mt-2 mt-md-0 mb-0 ">
                              <a
                                href="#"
                                className="text-dark text-decoration-none"
                              >
                                How to become a better django and react
                                developer
                              </a>
                            </h6>
                          </td>
                          <td>
                            <h6 className="mb-0">
                              <a
                                href="#"
                                className="text-dark text-decoration-none"
                              >
                                201 Views
                              </a>
                            </h6>
                          </td>
                          <td>March 21, 2024.</td>
                          <td>Technology</td>
                          <td>
                            <span className="badge bg-success bg-opacity-10 text-success mb-2">
                              Live
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-2">
                              <a
                                href="#"
                                className="btn-round mb-0 btn btn-danger"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                              >
                                <i className="bi bi-trash" />
                              </a>
                              <a
                                href="dashboard-post-edit.html"
                                className="btn btn-primary btn-round mb-0"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                              >
                                <i className="bi bi-pencil-square" />
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h6 className="mt-2 mt-md-0 mb-0 ">
                              <a
                                href="#"
                                className="text-dark text-decoration-none"
                              >
                                How to become a better django and react
                                developer
                              </a>
                            </h6>
                          </td>
                          <td>
                            <h6 className="mb-0">
                              <a
                                href="#"
                                className="text-dark text-decoration-none"
                              >
                                201 Views
                              </a>
                            </h6>
                          </td>
                          <td>March 21, 2024.</td>
                          <td>Technology</td>
                          <td>
                            <span className="badge bg-success bg-opacity-10 text-success mb-2">
                              Live
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-2">
                              <a
                                href="#"
                                className="btn-round mb-0 btn btn-danger"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                              >
                                <i className="bi bi-trash" />
                              </a>
                              <a
                                href="dashboard-post-edit.html"
                                className="btn btn-primary btn-round mb-0"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                              >
                                <i className="bi bi-pencil-square" />
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h6 className="mt-2 mt-md-0 mb-0 ">
                              <a
                                href="#"
                                className="text-dark text-decoration-none"
                              >
                                How to become a better django and react
                                developer
                              </a>
                            </h6>
                          </td>
                          <td>
                            <h6 className="mb-0">
                              <a
                                href="#"
                                className="text-dark text-decoration-none"
                              >
                                201 Views
                              </a>
                            </h6>
                          </td>
                          <td>March 21, 2024.</td>
                          <td>Technology</td>
                          <td>
                            <span className="badge bg-success bg-opacity-10 text-success mb-2">
                              Live
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-2">
                              <a
                                href="#"
                                className="btn-round mb-0 btn btn-danger"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                              >
                                <i className="bi bi-trash" />
                              </a>
                              <a
                                href="dashboard-post-edit.html"
                                className="btn btn-primary btn-round mb-0"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                              >
                                <i className="bi bi-pencil-square" />
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h6 className="mt-2 mt-md-0 mb-0 ">
                              <a
                                href="#"
                                className="text-dark text-decoration-none"
                              >
                                How to become a better django and react
                                developer
                              </a>
                            </h6>
                          </td>
                          <td>
                            <h6 className="mb-0">
                              <a
                                href="#"
                                className="text-dark text-decoration-none"
                              >
                                201 Views
                              </a>
                            </h6>
                          </td>
                          <td>March 21, 2024.</td>
                          <td>Technology</td>
                          <td>
                            <span className="badge bg-success bg-opacity-10 text-success mb-2">
                              Live
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-2">
                              <a
                                href="#"
                                className="btn-round mb-0 btn btn-danger"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                              >
                                <i className="bi bi-trash" />
                              </a>
                              <a
                                href="dashboard-post-edit.html"
                                className="btn btn-primary btn-round mb-0"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                              >
                                <i className="bi bi-pencil-square" />
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h6 className="mt-2 mt-md-0 mb-0 ">
                              <a
                                href="#"
                                className="text-dark text-decoration-none"
                              >
                                How to become a better django and react
                                developer
                              </a>
                            </h6>
                          </td>
                          <td>
                            <h6 className="mb-0">
                              <a
                                href="#"
                                className="text-dark text-decoration-none"
                              >
                                201 Views
                              </a>
                            </h6>
                          </td>
                          <td>March 21, 2024.</td>
                          <td>Technology</td>
                          <td>
                            <span className="badge bg-success bg-opacity-10 text-success mb-2">
                              Live
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-2">
                              <a
                                href="#"
                                className="btn-round mb-0 btn btn-danger"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                              >
                                <i className="bi bi-trash" />
                              </a>
                              <a
                                href="dashboard-post-edit.html"
                                className="btn btn-primary btn-round mb-0"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                              >
                                <i className="bi bi-pencil-square" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default Dashboard;
