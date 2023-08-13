import React from 'react';
import "../style/main.css";
import {useNavigate} from "react-router-dom";

const OtherHeader = () => {

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
                <li onClick={""}><a>About Us</a></li>
                <li onClick={""}><a>Contact Us</a></li>
                <li onClick={goLogin}><a>Logout</a></li>
            </ul>
        </div>

        <div id="mobile">
            <a href="#"><i class="fa fa-shopping-bag"></i></a>
            <i id="bar" class="fa fa-outdent"></i>
        </div>
    </section>
  )
}

export default OtherHeader