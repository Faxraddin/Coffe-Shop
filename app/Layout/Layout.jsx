'use client';

import React from "react";

const Layout = ({ children }) => {
    return (
        <>
            <div className="w-auto h-auto">
                {children}
            </div>
        </>
    );
};

export default Layout;