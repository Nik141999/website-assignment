import React from 'react'
import HeaderComponent from './HeaderComponent'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
     <HeaderComponent />

     <main style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>
              
     <Footer /> 
    </>
  )
}

export default Layout
