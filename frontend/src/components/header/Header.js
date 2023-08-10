/*import React from 'react'
import {BilogIn} from "react-icons/bi"
import {FaUserCircle} from "react-icons/fa"

export const Header = () => {
  return (
    <header>
        <nav>
            <div className="logo">
                <BilogIn size={35}/>
                <span>LOGO</span>
            </div>


            <ul className="home-links">
                <li className="--flex-center">
                    <FaUserCircle size={20}/>
                    <p className="--color-white">
                        Hi, Dimantha
                    </p>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header*/

import React from "react";
import {FaBars, FaTimes} from "react-icons/fa"

function Navbar(){
    return(
        <header>
            <h3>LOGO</h3>
            <nav>
                <a href="#">Home</a>
                <a href="#">Login</a>
                <a href="#">Register</a>
                <button>
                    <FaTimes/>
                </button>
            </nav>
            <button>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;
