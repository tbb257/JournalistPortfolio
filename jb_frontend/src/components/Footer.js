import React from 'react'
import useFetch from "../hooks/useFetch";
import { useRef } from "react";
import "../styles/Footer.css"

function Footer(){
    const scrollToTop = (elementRef) =>{
        window.scrollTo(0,0);
    }

    return(
        <div className="Contact">
                <div onClick={() => scrollToTop()} className="ContactHeader">
                    <h2>You Can Reach Me At...</h2>
                </div>
        </div>
    )
};


export default Footer
