import React from 'react'
import Header from '../partials/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../partials/Footer'
import { ToastContainer } from 'react-toastify';


const MainLayout = () => {
  return (
    <div>
        <Header />
        <Outlet/>
        <Footer/>
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default MainLayout