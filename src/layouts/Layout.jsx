import React from 'react';
import StarsCanvas from '../components/starBackground/StarBackground';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Layout = ({ children }) => {

    return (
      <div className="bg-[#030014] overflow-y-scroll overflow-x-hidden">
        <StarsCanvas/>
        <Header/>
        {children}
        <Footer/>
      </div>
    );
}

export default Layout;