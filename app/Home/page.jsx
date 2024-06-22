import React from "react";
import Image from "next/image";
import Navbar from "../Layout/Navbar";

const Product = ({src,name,price}) => {
  return(
    <div className="border flex sm:p-2 mt-7 relative flex-col justify-end sm:h-[250px] h-[300px] items-center text-center p-5 w-[240px] sm:w-[160px] rounded-[30px]">
      <Image className="sm:w-[100px] hover:scale-110 transition-all ease-linear duration-200 h-auto absolute w-[140px] -top-7" src={`/${src}`} width={2000} height={2000} alt="product"/>
      <div>
        <span className="font-light text-[14px]">Blend</span>
        <h1 className="font-bold text-[20px]">{name}</h1>
        <p className="font-light text-[21px]">{price}</p>
      </div>
    </div>
  )
}

const HomePage = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="flex snap-start 2lg:h-auto sm:h-screen justify-center 2lg:gap-3 gap-20 flex-col items-center w-full h-screen">
        <Navbar />
        <div className="2lg:flex-col 2lg:text-center w-[90%] relative h-full flex justify-between items-center">
          <div className="h-full 2lg:w-[100%] sm:justify-center sm:gap-7 2lg:items-center big:justify-center flex big:-mt-40 flex-col gap-5 w-[55%]">
            <Image width={2000} height={2000} className="w-[37vw] sm:w-[250px] 2lg:w-[60vw] h-auto" alt="HeroImg" src={'/HeroText.png'} />
            <h1 className="text-[60px] md:text-[8vw] font-extrabold text-[#371406]">An Online Coffee Shop</h1>
            <p>Straight to your doorstep. We don't roast our beans until we have your order. Every ore trusted the slipped the some auy.</p>
            <button className="bg-[#371406] md:py-4 transition-all ease-linear duration-300 border hover:bg-white hover:border-[#371406] hover:text-[#371406] rounded-[35px] font-bold text-white text-[20px] py-5 w-[310px]">Explore our products now!</button>
            <div className="flex mt-2">
              <span className="flex border-r-2 sm:pr-3 pr-7 flex-col text-[18px] sm:text-[15px] justify-center items-center font-light">Our products <h3 className="font-bold text-[#371406] sm:text-[20px] text-[33px]">1000+</h3></span>
              <span className="flex border-r-2 sm:px-3 px-7 flex-col text-[18px] sm:text-[15px] justify-center items-center font-light">Sales <h3 className="font-bold text-[#371406] sm:text-[20px] text-[33px]">2000+</h3></span>
              <span className="flex px-7 flex-col sm:px-3 text-[18px] justify-center sm:text-[15px] items-center font-light">Total sales <h3 className="font-bold text-[#371406] sm:text-[20px] text-[33px]">340k+</h3></span>
            </div>
          </div>
          <Image alt="cup" src={'/Cup.png'} width={2000} height={2000} className="2lg:relative 2lg:hidden 2lg:top-0 2lg:right-0 w-[45vw] absolute -right-24 big:top-24 -top-[5vw] h-auto" />
          <Image alt="cup2" src={'/Cup2.png'} width={2000} height={2000} className="2lg:relative sm:w-[250px] hidden 2lg:flex 2lg:top-0 2lg:right-0 w-[45vw] absolute -right-24 -top-[5vw] h-auto" />
        </div>
      </section>

      <section className="w-full flex flex-col snap-start h-screen 2lg:h-auto sm:h-scree">
        <Image width={2000} height={2000} className="w-[100%] h-auto" alt="Line" src={'/Line.png'} />
        <div className="w-full h-full flex gap-4 justify-center flex-col items-center">
          <Image width={2000} height={2000} className="w-[50px] h-auto" alt="Point" src={'/Point.png'} />
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
      <section className="w-full flex flex-col snap-start h-screen">
        <div className="w-full h-auto flex justify-center items-center">
          <div className="bg-[#f4e0dd] relative  top-20 flex justify-start lg:gap-2 gap-40 items-center lg:p-[5vw] p-10 rounded-[30px] w-[90%] h-[auto]">
            <div className="w-[400px] flex flex-col gap-5">
              <h1 className="text-[40px] lg:text-[5vw] font-extrabold text-[#371406]">Check out out best coffee beans</h1>
              <button className="bg-[#371406] md:py-4 transition-all ease-linear duration-300 border hover:bg-white hover:border-[#371406] hover:text-[#371406] rounded-[35px] font-bold text-white text-[20px] lg:w-[34vw] lg:text-[2.3vw] py-5 w-[310px]">Explore our products now!</button>
            </div>
            <Image alt="beans" src={'/Beans.png'} width={2000} height={2000} className="w-[400px] lg:w-[40vw] lg:relative lg:top-0 lg:right-0 right-40 2lg:right-3 absolute -top-14 h-auto"/>
          </div>
        </div>
      </section>
    </div>
  ); 
};

export default HomePage;
