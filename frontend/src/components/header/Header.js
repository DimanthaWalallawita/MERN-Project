import React from 'react';
import "../style/main.css";
import {useNavigate} from "react-router-dom";

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
        <p>JOBMANAGMENT</p>

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
  )
}

export default Header