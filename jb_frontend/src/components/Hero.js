import React from "react";
import "../styles/Hero.css"

function Hero(){

    return (
        <nav>
            <div className="sidenav">
                <h1 className="HeroName">Johana Bhuiyan</h1>
                <h2 className="navText" >About Me</h2>
                <h2 className="navText" >If you're here...</h2>
                <h2 className="navText" >Before you reach out</h2>
                <h2 className="navText" >Investigative Stories</h2>
                <h2 className="navText" >Tracking Impact</h2>
                <h2 className="LinkedIn"><a className="URL" href="https://www.linkedin.com/in/johana-bhuiyan-95a02a30/" target="_blank">LinkedIn</a></h2>
                <h2 className="Twitter"> <a className="URL" href="https://twitter.com/JMBooyah" target="_blank">Twitter</a></h2>
            </div>
        </nav>

    )
};


export default Hero
