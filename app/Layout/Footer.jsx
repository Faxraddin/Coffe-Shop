'use client'
import React from "react";
import Image from "next/image";

import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="lg:mx-5 Font lg:mb-5 mb-10 mx-10">
      <div className="mx-auto bg-[#371406ce] rounded-[20px] w-[100%] max-w-screen-xl md:pl-5 md:y-5 p-14 py-9">
        <div className="flex lg:flex-col lg:gap-10 justify-between">
          <div className="mb-0">
            <a href="/" className="flex items-center gap-1">
              <h1 className={`sm:gap-2 flex cursor-pointer justify-center items-center gap-3 text-white text-[23px] font-extralight`}><Image onClick={() => { router.push('/') }} src={'/Logo.png'} width={2000} className="w-[80px] sm:w-[50px] rounded-full h-auto relative bottom-1" priority={true} height={2000} alt="logo" />COFFEO</h1>
            </a>
          </div>
          <div className="grid gap-8 xs:grid-cols-1 lg:grid-cols-2 lg:gap-20 sm:gap-6 grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Us</h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href=""
                    className="hover:underline ">Instagram</a>
                </li>
                <li>
                  <a href=""
                    className="hover:underline">Facebook</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms and Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <div className="items-center sm:flex-col sm:gap-5 sm:justify-start sm:items-start flex justify-between">
          <span className="text-sm flex flex-wrap gap-2 text-white">© 2024 <a href="/" className="hover:underline">COFFEO. All Rights Reserved.</a></span>
        </div>
      </div>
    </footer>
  )
}
export default Footer