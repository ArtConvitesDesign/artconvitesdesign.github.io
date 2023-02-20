import React from "react";

import { Footer } from "./Footer";

export const Layout = ({ children }) => {
    return (
        <div>
            <div style={{height:'90vh',overflow:'auto'}}>
                {children}
            </div>
            <Footer />
        </div>
    );

}