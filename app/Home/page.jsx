import React from "react";
import Image from "next/image";
import Navbar from "../Layout/Navbar";

const HomePage = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center flex-col">
      <section className="flex 2lg:h-auto sm:h-screen justify-center 2lg:gap-3 gap-20 flex-col items-center w-full h-screen">
        <Navbar/>
        <div className="2lg:flex-col 2lg:text-center w-[90%] relative h-full flex justify-between items-center">
          <div className="h-full 2lg:w-[100%] sm:justify-center sm:gap-7 2lg:items-center flex flex-col gap-5 w-[50%]">
            <Image width={2000} height={2000} className="w-[37vw] sm:w-[250px] 2lg:w-[60vw] h-auto" alt="HeroImg" src={'/HeroText.png'}/>
            <h1 className="text-[60px] md:text-[8vw] font-extrabold text-[#371406]">An Online Coffe Shop</h1>
            <p>Straight to your doorstep. We don't roast our beans until we have your orderevery ore trousted the slipped the some auy.</p>
            <button className="bg-[#371406] md:py-4 transition-all ease-linear duration-300 border hover:bg-white hover:border-[#371406] hover:text-[#371406] rounded-[35px] font-bold text-white text-[20px] py-5 w-[310px]">Explore our products now!</button>
            <div className="flex mt-2">
              <span className="flex border-r-2 sm:pr-3 pr-7 flex-col text-[18px] sm:text-[15px] justify-center items-center font-light">Our products <h3 className="font-bold text-[#371406] sm:text-[20px] text-[33px]">1000+</h3></span>
              <span className="flex border-r-2 sm:px-3 px-7 flex-col text-[18px] sm:text-[15px] justify-center items-center font-light">Sales <h3 className="font-bold text-[#371406] sm:text-[20px] text-[33px]">2000+</h3></span>
              <span className="flex px-7 flex-col sm:px-3 text-[18px] justify-center sm:text-[15px] items-center font-light">Total sales <h3 className="font-bold text-[#371406] sm:text-[20px] text-[33px]">340k+</h3></span>
            </div>
          </div>
          <Image alt="cup" src={'/Cup.png'} width={2000} height={2000} className="2lg:relative 2lg:hidden 2lg:top-0 2lg:right-0 w-[45vw] absolute -right-24 -top-[5vw] h-auto"/>
          <Image alt="cup2" src={'/Cup2.png'} width={2000} height={2000} className="2lg:relative sm:w-[250px] hidden 2lg:flex 2lg:top-0 2lg:right-0 w-[45vw] absolute -right-24 -top-[5vw] h-auto"/>
        </div>
      </section>
    </div>
  )
}
export default HomePage