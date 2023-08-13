import React from 'react';
import "../style/main.css";
import {Link,NavLink,useNavigate} from "react-router-dom";


const activeLink = ({isActive}) => (isActive ? "active" : "");

const Header = () => {

    const navigate = useNavigate()

    const goLogin = () => {
        navigate("/login")
    }

    const goRegister = () => {
        navigate("/register")
    }

  return (

    <section id="header">
        <a href="#"><img src="" class="logo" alt=""/></a>

        <div>
            <ul id="navbar">
                <li><a className="active" href="/">Home</a></li>
                <li onClick={goRegister}><a>Register</a></li>
                <li onClick={goLogin}><a>Login</a></li>
            </ul>
        </div>

        <div id="mobile">
            <a href="#"><i class="fa fa-shopping-bag"></i></a>
            <i id="bar" class="fa fa-outdent"></i>
        </div>
    </section>

    /*<header className="header">
        <nav>
            <div className="logo" onClick={goHome}>
                <BiLogIn size={35}/>
                <span>JOB-Managment</span>
            </div>
            <ul className="home-links">
                <li className="--flex-center">
                    <FaUserCircle size={20}/>

                    <p className="--color-white">
                        Hi Dimantha
                    </p>
                </li>
                <li>
                    <button className="btn">
                        <Link to="/login">Login</Link>
                    </button>
                </li>
                
                <li>
                    
                <NavLink to="/profile" className={activeLink}>Profile</NavLink>
                    
                </li>

                <li>
                    <button className="nav-close-btn">
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    </header>
  */
  )
}

export default Header