'use client'

import React, { useState, useEffect } from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Image from "next/image";

const About = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const calculateHorizontalTransform = () => {
        const movementStrength = 50; // movement strength
        const centerX = window.innerWidth / 2;
        const offsetX = mousePosition.x;
        return ((offsetX - centerX) / centerX) * movementStrength;
    };

    const hand1Transform = {
        transform: `translateX(${calculateHorizontalTransform()}px)`,
    };

    const hand2Transform = {
        transform: `translateX(${calculateHorizontalTransform() * -1}px)`,
    };

    return (
        <div className="w-full overflow-x-hidden h-screen overflow-y-scroll snap-y snap-mandatory">
            <section
                style={{ backgroundImage: 'url("/BG.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                className="flex overflow-hidden snap-start lg:h-auto sm:h-auto justify-center 2lg:gap-3 gap-20 flex-col items-center w-full h-screen">
                <Navbar />
                <div className="w-full h-full flex justify-center items-center">
                    <Image style={hand1Transform} className="w-auto xs:left-9 relative top-2 h-full" src={'/Hand1.png'} alt="hand1" width={2000} height={2000} />
                    <Image style={hand2Transform} className="w-auto xs:right-9 relative top-4 h-full" src={'/Hand2.png'} alt="hand2" width={2000} height={2000} />
                </div>
            </section>
            <section className="flex text-[#371406] lg:h-auto snap-start sm:h-auto justify-center 2lg:gap-3 gap-20 flex-col items-center w-full h-screen">
                <div className="w-[90%] h-full lg:py-20 sm:py-10 lg:gap-10 lg:flex-col flex lg:justify-center justify-between items-center">
                    <div className="flex lg:w-full w-[40%] sm:gap-5 flex-col gap-10">
                        <h1 className="font-bold text-[40px] sm:text-[30px]">Truly Great Coffee</h1>
                        <p className="font-light text-[19px] sm:text-[17px]">Welcome to our coffee haven, where passion meets perfection in every sip. At [Your Coffee Website Name], we are dedicated to bringing you the finest coffee beans from the most renowned regions globally. Our commitment to quality begins with our meticulous selection process, ensuring only the best beans make it to your cup. Whether you're a connoisseur or a casual coffee lover, explore our range of blends and single-origin coffees crafted to elevate your coffee experience to new heights. Join us on a journey of flavor, aroma, and uncompromising excellence in every brew.</p>
                    </div>
                    <div className="w-auto lg:w-full h-auto">
                        <Image src={'/About1.png'} width={2000} height={2000} alt="about1" className="w-auto lg:hidden lg:w-full rounded-[20px] shadow-2xl h-[90%]" />
                        <Image src={'/About12.png'} width={2000} height={2000} alt="about12" className="w-auto hidden lg:flex lg:w-full rounded-[20px] shadow-2xl h-[90%]" />
                    </div>
                </div>
            </section>
            <section className="flex text-[#371406] lg:h-auto snap-start sm:h-auto justify-center 2lg:gap-3 gap-20 flex-col items-center w-full h-screen">
                <div className="w-[90%] h-full lg:py-20 sm:py-10 lg:gap-10 lg:flex-col-reverse flex lg:justify-center justify-between items-center">
                    <div className="w-auto lg:w-full h-auto">
                        <Image src={'/About2.png'} width={2000} height={2000} alt="about2" className="w-auto lg:hidden lg:w-full rounded-[20px] shadow-2xl h-[90%]" />
                        <Image src={'/About22.png'} width={2000} height={2000} alt="about22" className="w-auto hidden lg:flex lg:w-full rounded-[20px] shadow-2xl h-[90%]" />
                    </div>
                    <div className="flex lg:w-full w-[40%] sm:gap-5 flex-col gap-10">
                        <h1 className="font-bold text-[40px] sm:text-[30px]">Introducing Pour-over Coffee </h1>
                        <p className="font-light text-[19px] sm:text-[17px]">Welcome to the art of Pour-over Coffee, where craftsmanship meets flavor in every cup. At [Your Coffee Website Name], we celebrate the ritual of hand-brewed excellence, where each pour is an invitation to savor the rich aromas and nuanced tastes that only pour-over coffee can deliver. Whether you're a seasoned aficionado or just beginning your journey into the world of specialty coffee, our guides and curated selection of beans ensure that every brewing experience is a masterpiece. Join us as we explore the delicate balance of technique and taste, and discover why pour-over coffee is not just a method, but a passion.</p>
                    </div>
                </div>
            </section>
            <section className="flex text-[#371406] lg:h-auto snap-start sm:h-auto justify-center 2lg:gap-3 gap-20 flex-col items-center w-full h-screen">
                <div className="w-[90%] h-full lg:py-20 sm:py-10 lg:gap-10 lg:flex-col flex lg:justify-center justify-between items-center">
                    <div className="flex lg:w-full w-[40%] sm:gap-5 flex-col gap-10">
                        <h1 className="font-bold text-[40px] sm:text-[30px]">Why Ethical Coffee Matters</h1>
                        <p className="font-light text-[19px] sm:text-[17px]">Ethical coffee matters not just for the sake of sustainability and fairness, but because it embodies our commitment to a better world—one cup at a time. At [Your Coffee Website Name], we believe in the power of ethical sourcing to elevate the entire coffee experience. By supporting farmers who prioritize environmental stewardship and fair labor practices, we ensure that each bean in your pour-over brew is imbued with integrity and care. Join us in celebrating coffee that not only delights the senses but also honors the communities and ecosystems from which it originates. Together, let's brew a future where every sip tells a story of conscientiousness and quality.</p>
                    </div>
                    <div className="w-auto lg:w-full h-auto">
                        <Image src={'/About3.png'} width={2000} height={2000} alt="about3" className="w-auto lg:hidden lg:w-full rounded-[20px] shadow-2xl h-[90%]" />
                        <Image src={'/About32.png'} width={2000} height={2000} alt="about32" className="w-auto hidden lg:flex lg:w-full rounded-[20px] shadow-2xl h-[90%]" />
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-col snap-start lg:h-auto lg:mt-20 h-auto">
                <Footer/>
            </section>
        </div>
    )
}
export default About