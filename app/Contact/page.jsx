import React from "react";
import Image from "next/image";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

const ContactUs = () => {
    return (
        <div className="w-full fadeIn overflow-x-hidden h-screen overflow-y-scroll snap-y snap-mandatory">
            <section className="flex text-[#371406] pb-20 snap-start sm:h-auto justify-center 2lg:gap-3 gap-5 flex-col items-center w-full h-auto">
                <Navbar/>
                <div className="w-[90%] h-auto flex-col gap-5 flex justify-between items-center">
                    <h1 className="text-left w-full font-bold text-[35px] big:text-[3vw]">Contact us</h1>
                    <Image alt="coffe main hero" src={'/Contact.png'} width={1000} height={1000} className="w-full rounded-[20px] h-auto"/>
                    <div className="w-full flex gap-5 lg:flex-col justify-start items-center h-auto">
                        <div className="w-1/2 big:text-[1.4vw] h-[400px] lg:w-full text-[23px] font-medium flex justify-center gap-10 items-start flex-col">
                            <span>Tel: <span className='font-light'>+0906809428 </span></span>
                            <span>Coffee Questions: <span className='font-light'>support@rangrangcoffee.v </span></span>
                            <span>Sales Department: <span className='font-light'>sales@rangrangcoffee.vn</span> </span>
                            <span>Our Office: <span className='font-light'>Street 104 – BTT, Binh Trung Tay Ward, District 2, Ho Chi Minh city</span> </span>
                        </div>
                        <div className="w-1/2 h-[auto] big:text-[1.3vw] flex lg:w-full lg:p-0 flex-col gap-5 py-10">
                            <input placeholder="Full Name" type="text" className="p-5 w-full h-auto rounded-[25px] border"/>
                            <input placeholder="Email" type="email" className="p-5 w-full h-auto rounded-[25px] border"/>
                            <textarea className="p-5 rounded-[25px] h-[100%] resize-none" placeholder="Enter your text here..."></textarea>
                            <button className="rounded-[25px] p-5 w-full ease-linear transition-all duration-150 border border-green-700 hover:bg-white hover:text-green-700  text-white font-bold bg-green-700">Submit</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col items-center justify-center snap-start lg:h-auto h-auto">
                <div className="w-[96%] h-auto">
                    <Footer/>
                </div>
            </section>
        </div>
    )
}
export default ContactUs