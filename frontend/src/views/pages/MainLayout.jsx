import React from 'react'
import Header from '../partials/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../partials/Footer'

const MainLayout = () => {
  return (
    <div>
        <Header />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout