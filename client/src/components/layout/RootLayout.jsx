import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import Services from '../Services'

const RootLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Services/>
        <Footer/>
    </>
  )
}

export default RootLayout