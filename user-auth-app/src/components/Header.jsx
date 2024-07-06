import React, { useContext, useEffect, useState } from 'react';
import image from "../assets/diamond.jpeg";
import { Link, useNavigate } from 'react-router-dom';
import img from '../assets/diamond.jpeg';
import { AuthContext } from './AuthContext';
import '../App.css';

const Header = () => {
  const [menu, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsMenuOpen(!menu);
  };

  const { name } = useContext(AuthContext);
  const isAuth = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.clear();
    alert("success");
    window.location.reload();
    navigate("/login");
  };

  let username = localStorage.getItem("name");
  let email = localStorage.getItem("email");

  return (
    <>
      <div className='top-header-area'>
        <header className='top-header-area flex border-b py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[0px] tracking-wide relative z-50'>
          <div className='flex flex-wrap items-center gap-5 w-full'>
            <Link to={'/'}><img width={"90px"} height={"90px"} src={image} className='w-35' alt="Logo" /></Link>
            <h1 className='text-3xl center'>TANISHQ</h1>
            <p>Welcome To The Lovely World <span style={{ color: "red" }}>{username} {email}</span></p>
            <div id="collapseMenu"
              style={{ display: menu ? "block" : "none" }}
              className='max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
              <button id="toggleClose" onClick={handleClick} style={{ display: menu ? "block" : "none" }} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                  <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" clipRule="evenodd"></path>
                  <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" clipRule="evenodd"></path>
                </svg>
              </button>
              <ul className='lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                <li className='mb-6 hidden max-lg:block'>
                  <Link to="#"><img src={img} alt="logo" className='w-36' /></Link>
                </li>
                <Link to={'/'}>
                  <li className='max-lg:border-b max-lg:py-3 px-3'>
                    <span className='lg:hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>Home</span>
                  </li>
                </Link>
                <Link to={'/team'}>
                  <li className='max-lg:border-b max-lg:py-3 px-3'>
                    <span className='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Team</span>
                  </li>
                </Link>
                <Link to={'/feature'}>
                  <li className='max-lg:border-b max-lg:py-3 px-3'>
                    <span className='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Feature</span>
                  </li>
                </Link>
                <Link to={'/blog'}>
                  <li className='max-lg:border-b max-lg:py-3 px-3'>
                    <span className='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Blog</span>
                  </li>
                </Link>
                <Link to={'/about'}>
                  <li className='max-lg:border-b max-lg:py-3 px-3'>
                    <span className='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>About</span>
                  </li>
                </Link>
                {isAuth ? 
                  <li onClick={handleLogout} className='max-lg:border-b max-lg:py-3 px-3 border-2 border-red-500 bg-red-500 cursor-pointer text-white rounded-full'>
                    LogOut
                  </li>
                : <Link to={"/login"}>
                    <li className='max-lg:border-b max-lg:py-3 px-3 border-2 border-green-500 bg-green-500 cursor-pointer text-white rounded-full'>
                      Login
                    </li>
                  </Link>
                }
              </ul>
            </div>
            <button id="toggleOpen" onClick={handleClick} style={{ display: !menu ? "block" : "none" }} className='lg:hidden ml-auto'>
              <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </button>
            <div className='flex lg:ml-auto max-lg:w-full'></div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
