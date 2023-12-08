import React from 'react';

const Header = () => {

    return (
      <div className="w-full h-[200px] lg:h-[80px] fixed top-0 shadow-md shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-between m-auto px-[10px]">
          {/* Logo */}
          <a
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center py-3"
          >
            <img
              src="/Navlogo.jpg"
              alt="Logo"
              className="rounded-full w-[60px] h-[60px] cursor-pointer hover:animate-slowspin"
            />
          </a>

          {/*  */}
          <div className="lg:w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex gap-8 items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                <a href="#about-me" className='cursor-pointer'>
                    About me
                </a>

                <a href="#skills" className='cursor-pointer'>
                    Skills
                </a>

                <a href='#projects' className='cursor-pointer'>
                    Projects
                </a>
            </div>
          </div>

          <div className='hidden lg:block'></div>
        </div>
      </div>
    );
}

export default Header