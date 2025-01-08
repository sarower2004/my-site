import React, { useState } from "react";
import "../Navber/Navber.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialSkype } from "react-icons/ti";
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { IoReorderTwo } from "react-icons/io5";
import { CiMail } from "react-icons/ci";






const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar for large devices */}
      <div className="hidden lg:flex flex-col bg-gray-800 text-white h-screen w-[200px] md:w-[260px] lg:w-[300px] fixed left-0 top-0 z-10">
        <div className="flex flex-col items-center p-4">
          <div className="profile">
            <img
              src="/images/profile.jpg"
              alt="profile"
              className="w-[100%]"
            />
          </div>
          <p className="owner_name">Md Sarower Jahan</p>
        </div>
        <div className="sm:flex justify-center social">
          <ul className="flex space-x-4 text-2xl">
            <li>
              <a
                href="https://web.facebook.com/sarower.hossain.16547"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <TiSocialFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sarower.hossain.2004/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <SlSocialInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sarower-jahan-b5b543312/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <TiSocialLinkedin />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                <TiSocialTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                <TiSocialSkype />
              </a>
            </li>
          </ul>
        </div>
          <div className="menu">

                  <ul className="mt-8 space-y-4 text-center">
                  <li>
                    <IoHomeOutline className="menu_icon"/>

                    <a href="/" className="hover:text-blue-400">
                      Home
                    </a>
                  </li>
                  <li >
                  <IoPersonOutline className="menu_icon" />

                    <a href="#" className="hover:text-blue-400">
                      About
                    </a>
                  </li>
                  <li>
                      <IoDocumentTextOutline className="menu_icon"  />
                    <a href="#" className="hover:text-blue-400">
                      Resume
                    </a>
                  </li>
                  <li>
                     <GrGallery className="menu_icon" />
                    <a href="#" className="hover:text-blue-400">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <IoReorderTwo className="menu_icon"  />
                    <a href="#" className="hover:text-blue-400">
                      Services
                    </a>
                  </li>
                  <li>
                  <CiMail className="menu_icon"  />
                    <a href="#" className="hover:text-blue-400">
                      Contact
                    </a>
                  </li>
                </ul>
          </div>
      </div>

      {/* Navbar for small and medium devices */}
      <div className="lg:hidden fixed top-4 right-4 z-20">
        <button
          onClick={toggleNavbar}
          className="text-white bg-blue-500 p-2 rounded-full"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-[260px] bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:hidden z-30`}
      >
        <div className="flex flex-col items-center p-4 ">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-[10px] border-gray-600 ">

              <img
                src="/images/profile.jpg"
                alt="profile"
                className=" "
              />
          </div>
          <p className="mt-2 text-[16px] text-white uppercase font-Montserrat font-semibold">Md Sarower Jahan</p>
        </div>
        <div className="flex justify-center mt-1">
          <ul className="flex space-x-3 text-xl respon_social">
            <li>
              <a
                href="https://web.facebook.com/sarower.hossain.16547"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <TiSocialFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sarower.hossain.2004/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <SlSocialInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sarower-jahan-b5b543312/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <TiSocialLinkedin />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                <TiSocialTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                <TiSocialSkype />
              </a>
            </li>
          </ul>
        </div>
        <div className="respon_menu">
          
          <ul className="mt-6 space-y-3 ml-[40px] w-full text-[16px] text-gray-400 font-Montserrat uppercase mb-[46px] respon_menu">
            <li>
              <IoHomeOutline className="respon_menu_icon"/>

              <a href="#" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
            <IoPersonOutline className="respon_menu_icon" />

              <a href="#" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
               <IoDocumentTextOutline className="respon_menu_icon"  />
              <a href="#" className="hover:text-blue-400">
                Resume
              </a>
            </li>
            <li>
              <GrGallery className="respon_menu_icon" />
              <a href="#" className="hover:text-blue-400">
                Portfolio
              </a>
            </li>
            <li>
               <IoReorderTwo className="respon_menu_icon"  />
              <a href="#" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
            <CiMail className="respon_menu_icon" />
              <a href="#" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
