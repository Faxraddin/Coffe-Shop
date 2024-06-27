'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Intro = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 2300);

      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  return (
    isVisible && (
      <div className="w-screen flex justify-center items-center fixed z-10 bg-[#fbf9f8] h-screen">
        <Image src={'/Intro.gif'} alt='intro' className="w-[400px]" width={300} height={300} />
      </div>
    )
  );
}

export default Intro;
