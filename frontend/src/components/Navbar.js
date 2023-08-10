import { useRef } from "react"
import React from "react";
import { FaBars, FaTools } from "react-icons/fa"
import "../components/style/main.css"

function Navbar(){
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="#">Home</a>
                <a href="#">My work</a>
                <a href="#">Blog</a>
                <a href="#">About Me</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTools/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;