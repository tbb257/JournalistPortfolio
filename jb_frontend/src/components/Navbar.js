import React from "react";
import {NavLink} from 'react-router-dom'
import "../styles/Nav.css"

function Navbar(){
    return (
        <nav>
            <div className="grid-container">
                <NavLink className="navText" to="/">Home</NavLink>
                <NavLink className="navText" to="/About">About</NavLink>
                <NavLink className="navText" to="/You">If you're here...</NavLink>
                <NavLink className="navText" to="/Preface">Before you reach out</NavLink>
                <NavLink className="navText" to="/Stories">Investigative Stories</NavLink>
                <NavLink className="navText" to="/Tracking">Tracking Impact</NavLink>
            </div>
        </nav>
    )
};


export default Navbar
