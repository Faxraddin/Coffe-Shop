'use client'

import React from "react";
import Image from "next/image";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import { motion } from "framer-motion";

const Product = ({src,name,price}) => {
  return(
    <div className="border hover:bg-white ease-linear transition-all duration-150 hover:border-black flex sm:p-2 mt-7 relative flex-col justify-end sm:h-[250px] h-[300px] items-center text-center p-5 w-[240px] sm:w-[160px] rounded-[30px]">
      <Image className="sm:w-[100px] hover:scale-110 transition-all ease-linear duration-200 h-auto absolute w-[140px] -top-7" src={`/${src}`} width={2000} height={2000} alt="product"/>
      <div>
        <span className="font-light text-[14px]">Blend</span>
        <h1 className="font-bold text-[20px]">{name}</h1>
        <p className="font-light text-[21px]">{price}</p>
      </div>
    </div>
  )
}

const Product2 = ({src,name,price,selected}) => {
  return(
    <div className={`border hover:bg-white hover:border-black transition-all ease-linear duration-150 md:w-full flex mt-7 md:justify-between sm:h-[auto] md:h-auto relative flex-col justify-end h-[330px] items-center text-center p-5 w-[30%] md:p-3 rounded-[30px]`}>
      <Image className="md:w-[120px] sm:w-[15vw] xs:w-[25vw] hover:scale-110 transition-all ease-linear md:relative duration-200 h-auto absolute w-[160px] top-0" src={`/${src}`} width={2000} height={2000} alt="product"/>
      <div className="md:w-full md:flex md:flex-col md:justify-center md:gap-2 md:h-full md:text-center">
        <p className="font-light md:text-[4.6vw] text-[21px]">{name}</p>
        <h1 className="font-bold text-[20px]">{price}</h1>
      </div>
    </div>
  )
}

const HomePage = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.5,duration:1.2}} className="w-full overflow-x-hidden h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="flex snap-start 2lg:h-auto sm:h-auto justify-center 2lg:gap-3 gap-20 flex-col items-center w-full h-screen">
        <Navbar />
        <div className="2lg:flex-col 2lg:text-center w-[90%] relative h-full flex justify-between items-center">
          <div className="h-full 2lg:w-[100%] sm:justify-center sm:gap-7 2lg:items-center big:justify-center flex big:-mt-40 flex-col gap-5 w-[55%]">
            <Image width={2000} height={2000} className="w-[37vw] pointer-events-none sm:w-[250px] 2lg:w-[60vw] h-auto" alt="HeroImg" src={'/HeroText.png'} />
            <h1 className="text-[60px] md:text-[8vw] font-extrabold text-[#371406]">An Online Coffee Shop</h1>
            <p>Straight to your doorstep. We don't roast our beans until we have your order. Every ore trusted the slipped the some auy.</p>
            <button className="bg-[#371406] md:py-4 transition-all ease-linear duration-300 border hover:bg-white hover:border-[#371406] hover:text-[#371406] rounded-[35px] font-bold text-white text-[20px] py-5 w-[310px]">Explore our products now!</button>
            <div className="flex mt-2">
              <span className="flex border-r-2 sm:pr-3 pr-7 flex-col text-[18px] sm:text-[15px] justify-center items-center font-light">Our products <h3 className="font-bold text-[#371406] sm:text-[20px] text-[33px]">1000+</h3></span>
              <span className="flex border-r-2 sm:px-3 px-7 flex-col text-[18px] sm:text-[15px] justify-center items-center font-light">Sales <h3 className="font-bold text-[#371406] sm:text-[20px] text-[33px]">2000+</h3></span>
              <span className="flex px-7 flex-col sm:px-3 text-[18px] justify-center sm:text-[15px] items-center font-light">Total sales <h3 className="font-bold text-[#371406] sm:text-[20px] text-[33px]">340k+</h3></span>
            </div>
          </div>
          <Image alt="cup" src={'/Cup.png'} width={2000} height={2000} className="2lg:relative pointer-events-none 2lg:hidden 2lg:top-0 2lg:right-0 w-[45vw] absolute -right-24 big:top-24 -top-[5vw] h-auto" />
          <Image alt="cup2" src={'/Cup2.png'} width={2000} height={2000} className="2lg:relative pointer-events-none sm:w-[250px] hidden 2lg:flex 2lg:top-0 2lg:right-0 w-[45vw] absolute -right-24 -top-[5vw] h-auto" />
        </div>
      </section>

      <section className="w-full flex flex-col snap-start h-screen 2lg:h-auto sm:h-auto">
        <Image width={2000} height={2000} className="w-[100%] h-auto pointer-events-none" alt="Line" src={'/Line.png'} />
        <div className="w-full h-full flex gap-4 justify-center flex-col items-center">
          <Image width={2000} height={2000} className="w-[50px] h-auto pointer-events-none" alt="Point" src={'/Point.png'} />
          <div className="flex w-[95%] gap-3 text-[#371406] flex-col text-center">
            <h1 className="text-[40px] md:text-[8vw] font-bold">Explore the recent products</h1>
            <h2 className="text-[17px] sm:px-3 font-light">Our delectable drink options, includino classic espresso choices, house soeciolties, truit smoothies and frozen treats.</h2>
            <div className="mt-10 flex flex-wrap justify-center gap-5 items-center">
              <Product src={'P1.png'} name={'Spice iceland blend'} price={'$12'}/>
              <Product src={'P2.png'} name={'Hair blender'} price={'$12'}/>
              <Product src={'P3.png'} name={'Col brew blend'} price={'$16'}/>
              <Product src={'P4.png'} name={'Honduras EL Puente'} price={'$80'}/>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col snap-start h-screen md:h-auto">
        <div className="w-full h-full flex-col flex justify-between items-center">
          <div className="bg-[#f4e0dd] relative flex mt-14 sm:mt-5 justify-start lg:gap-2 gap-40 items-center lg:p-[5vw] p-10 rounded-[30px] w-[90%] h-[auto]">
            <div className="w-[400px] flex flex-col gap-5">
              <h1 className="text-[40px] lg:text-[5vw] font-extrabold text-[#371406]">Check out out best coffee beans</h1>
              <button className="bg-[#371406] md:py-4 transition-all ease-linear duration-300 border hover:bg-white hover:border-[#371406] hover:text-[#371406] rounded-[35px] font-bold text-white text-[20px] lg:w-[34vw] lg:text-[2.3vw] py-5 w-[310px]">Explore our products now!</button>
            </div>
            <Image alt="beans" src={'/Beans.png'} width={2000} height={2000} className="w-[400px] pointer-events-none lg:w-[40vw] lg:relative lg:top-0 lg:right-0 right-40 2lg:right-3 absolute -top-10 h-auto"/>
          </div>
          <div className="w-[90%] h-[100%] md:gap-0 md:justify-center flex md:flex-col justify-around gap-3 items-center">
            <Product2 src={'I2.png'} selected={false} name={'Miele CM6 Carafe'} price={'$12'}/>
            <Product2 src={'I1.png'} selected={true} name={'NEw. Ember cup'} price={'$6.48'}/>
            <Product2 src={'I3.png'} selected={false} name={'Espro P3 French Press'} price={'$5.52'}/>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col snap-start lg:h-auto lg:mt-20 h-auto">
        <div className="w-full h-full py-20 sm:pt-10 flex justify-between 2lg:justify-start 2lg:items-start gap-5 2lg:flex-col items-center">
          <Image alt="beans2" src={'/Beans2.png'} width={2000} height={2000} className="h-[70%] pointer-events-none sm:w-full sm:mt-10 2lg:h-auto 2lg:w-[50%] relative 2lg:left-0 w-[auto]"/>
          <div className="flex 2lg:w-full 2lg:text-center 2lg:justify-center justify-center text-left pr-10 flex-col items-center gap-5 h-auto w-[55%]">
            <h1 className="text-[3.3vw] sm:hidden text-[#371406] md:text-[4vw] font-normal">We care about the quality of our <span className="font-extrabold">products</span></h1>
            <p className="text-[1.2vw] sm:hidden text-[#371406] md:text-[2vw] font-light">Drinkine cottee is one ef the mest clobel thinas wou de each dows here i can spend a long and comfortable time with this workspace tacilities</p>
            <Image alt="what" className="w-full 2lg:pl-10 sm:pl-5 h-auto pointer-events-none" width={2000} height={2000} src={'/What.png'}/>
            <button className="bg-[#371406] sm:hidden md:py-3 transition-all ease-linear duration-300 border sm:ml-10 hover:bg-white hover:border-[#371406] hover:text-[#371406] rounded-[35px] font-bold text-white md:text-[17px] sm:w-[90%] text-[20px] py-5 w-[300px]">Explore our products now!</button>
          </div>
        </div>
        <Footer/>
      </section>
    </motion.div>
  ); 
};

export default HomePage;
