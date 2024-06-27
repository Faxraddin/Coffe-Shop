'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="w-full h-auto flex justify-center items-center">
      <div className="w-[90%] flex items-center justify-between py-5">
        <div className="flex items-center justify-center gap-3">
          <Image alt="Logo" src={'/Logo.png'} width={2000} height={2000} className="w-[50px] sm:w-[40px] rounded-full h-auto" />
          <h1 className="text-[30px] font-bold">Coffeo</h1>
        </div>

        <div className={`flex ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'} flex-col transition-transform duration-300 text-white top-0 left-0 fixed bg-black z-[99] h-screen w-screen text-[22px] justify-center items-center gap-7`}>
          <div className="flex items-center justify-center gap-3">
            <Image alt="Logo" src={'/Logo.png'} width={2000} height={2000} className="w-[50px] sm:w-[40px] rounded-full h-auto" />
            <h1 className="text-[30px] font-bold">Coffeo</h1>
          </div>
          <Link href={'/'}>Home</Link>
          <Link href={'/About'}>About</Link>
          <Link href={'/Contact'}>Contact Us</Link>
        </div>

        <div className="lg:hidden flex text-[18px] justify-center items-center gap-7">
          <Link href={'/'}>Home</Link>
          <Link href={'/About'}>About</Link>
          <Link href={'/Contact'}>Contact Us</Link>
        </div>
        <button className="lg:hidden rounded-[40px] text-[16px] transition-all ease-linear duration-300 border hover:bg-white hover:border-[#723d29] hover:text-[#723d29] bg-[#723d29] p-4 text-white">Get Started Now!</button>

        <input id="checkbox" type="checkbox" />
        <label onClick={handleClick} className="toggle z-[100]" for="checkbox">
          <div id="bar1" class="bars"></div>
          <div id="bar2" class="bars"></div>
          <div id="bar3" class="bars"></div>
        </label>
      </div>
    </header>
  );
};

export default Navbar;
