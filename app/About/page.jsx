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
                <div className="w-full h-full flex justify-center items-center">
                    <Image className="w-auto h-full" src={'/Hand1.png'} alt="hand1" width={2000} height={2000}/>
                    <Image className="w-auto h-full" src={'/Hand2.png'} alt="hand2" width={2000} height={2000}/>
                </div>
            </section>
            <section className="flex snap-start 2lg:h-auto sm:h-auto justify-center 2lg:gap-3 gap-20 flex-col items-center w-full h-screen">

            </section>
        </div>
    )
}
export default About