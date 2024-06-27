'use client';

import React from "react";
import Intro from "@/components/Intro";

const Layout = ({ children }) => {
    return (
        <>
            <div className="w-auto h-auto">
                <Intro/>
                {children}
               
            </div>
        </>
    );
};

export default Layout;