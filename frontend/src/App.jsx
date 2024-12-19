import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./views/cors/Index";
import About from "./views/pages/About";
import Contact from "./views/pages/Contact";
import Register from "./views/auth/Register";
import Login from "./views/auth/Login";
import Logout from "./views/auth/Logout";
import ForgotPassword from "./views/auth/ForgotPassword";
import CreatePassword from "./views/auth/CreatePassword";
import Dashboard from "./views/dashboard/Dashboard";
import Posts from "./views/dashboard/Posts";
import AddPost from "./views/dashboard/AddPost";
import EditPost from "./views/dashboard/EditPost";
import Comments from "./views/dashboard/Comments";
import Notifications from "./views/dashboard/Notifications";
import Profile from "./views/dashboard/Profile";
import MainWrapper from "./layouts/MainWrapper"
import Detail from "./views/cors/Detail";
import Category from "./views/cors/Category"
import Search from "./views/cors/Search"
import MainLayout from "./views/pages/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainWrapper>
          <Routes>
            {/* <Route path="/" element={<MainLayout/>}></Route> */}
            <Route path="/" element={<Index />} />
            <Route path="/details/:slug/" element={<Detail />} />
            <Route path="/categories/" element={<Category />} />
            <Route path="/search/" element={<Search />} />

            {/* Authentication */}
            <Route path="/register/" element={<Register />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/logout/" element={<Logout />} />
            <Route path="/forgot-password/" element={<ForgotPassword />} />
            <Route path="/create-password/" element={<CreatePassword />} />

            {/* Dashboard */}
            <Route path="/dashboard/" element={<Dashboard />} />
            <Route path="/posts/" element={<Posts />} />
            <Route path="/add-post/" element={<AddPost />} />
            <Route path="/edit-post/:slug" element={<EditPost />} />
            <Route path="/comments/" element={<Comments />} />
            <Route path="/notifications/" element={<Notifications />} />
            <Route path="/profile/" element={<Profile />} />

            {/* Pages */}
            <Route path="/about/" element={<About />} />
            <Route path="/contact/" element={<Contact />} />
          </Routes>
        </MainWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
