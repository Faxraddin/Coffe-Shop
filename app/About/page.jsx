'use client'

import React, { useState, useEffect } from "react";
import Navbar from "../Layout/Navbar";
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

    const calculateTransform = (axis) => {
        const movementStrength = 50; // movement strength
        const center = axis === "x" ? window.innerWidth / 2 : window.innerHeight / 2;
        const offset = axis === "x" ? mousePosition.x : mousePosition.y;
        return ((offset - center) / center) * movementStrength;
    };

    const hand1Transform = {
        transform: `translate(${calculateTransform("x")}px, ${calculateTransform("y")}px)`,
    };

    const hand2Transform = {
        transform: `translate(${calculateTransform("x") * -1}px, ${calculateTransform("y") * -1}px)`,
    };

    return (
        <div className="w-full overflow-x-hidden h-screen overflow-y-scroll snap-y snap-mandatory">
            <section
                style={{ backgroundImage: 'url("/BG.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                className="flex snap-start 2lg:h-auto sm:h-auto justify-center 2lg:gap-3 gap-20 flex-col items-center w-full h-screen">
                <Navbar />
                <div className="w-full h-full flex justify-center items-center">
                    <Image style={hand1Transform} className="w-auto h-full" src={'/Hand1.png'} alt="hand1" width={2000} height={2000}/>
                    <Image style={hand2Transform} className="w-auto h-full" src={'/Hand2.png'} alt="hand2" width={2000} height={2000}/>
                </div>
            </section>
            <section className="flex snap-start 2lg:h-auto sm:h-auto justify-center 2lg:gap-3 gap-20 flex-col items-center w-full h-screen">

            </section>
        </div>
    )
}
export default About