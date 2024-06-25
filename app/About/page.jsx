import React from "react";
import Navbar from "../Layout/Navbar";
import Image from "next/image";

const About = () => {
    return (
        <div className="w-full overflow-x-hidden h-screen overflow-y-scroll snap-y snap-mandatory">
            <section
                style={{ backgroundImage: 'url("/BG.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                className="flex snap-start 2lg:h-auto sm:h-auto justify-center 2lg:gap-3 gap-20 flex-col items-center w-full h-screen">
                <Navbar />
                <div className="w-full h-full">
                    
                </div>
            </section>
            <section className="flex snap-start 2lg:h-auto sm:h-auto justify-center 2lg:gap-3 gap-20 flex-col items-center w-full h-screen">

            </section>
        </div>
    )
}
export default About