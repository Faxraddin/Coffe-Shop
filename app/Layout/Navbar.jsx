'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <header className="w-full h-auto flex justify-center items-center">
      <div className="w-[90%] flex items-center justify-between py-5">
        <div className="flex items-center justify-center gap-3">
          <Image alt="Logo" src={'/Logo.png'} width={2000} height={2000} className="w-[50px] rounded-full h-auto" />
          <h1 className="text-[30px] font-bold">Coffeo</h1>
        </div>
        <div className="lg:hidden flex text-[18px] justify-center items-center gap-7">
          <Link href={'/'}>Home</Link>
          <Link href={'/About'}>About</Link>
          <ScrollLink to="products" className="cursor-pointer" smooth={true} duration={500}>Products</ScrollLink>
          <Link href={'/Contact'}>Contact Us</Link>
        </div>
        <button className="lg:hidden rounded-[40px] text-[16px] transition-all ease-linear duration-300 border hover:bg-white hover:border-[#723d29] hover:text-[#723d29] bg-[#723d29] p-4 text-white">Get Started Now!</button>

        <label className="hamburger hidden lg:flex">
          <input type="checkbox"/>
          <svg viewBox="0 0 32 32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
      </div>
    </header>
  );
};

export default Navbar;
