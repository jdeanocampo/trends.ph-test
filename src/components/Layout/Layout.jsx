import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Router from '../../routers/Routers'
import NavbarTop from '../Header/NavbarTop'

const Layout = () => {
  return (
  <>
    <NavbarTop />
    <Header/>
    <div>
        <Router></Router>
    </div>
    <Footer/>
  </>
  );
}

export default Layout