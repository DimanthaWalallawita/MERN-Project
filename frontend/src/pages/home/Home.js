import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "../../components/style/main.css";

const Home = () => {

  return (
    <div>
      <h1>
        <Header/>

        <section id="hero">
        </section>

        <section className="container hero">
          <div className="hero-text">
            <br />
            <h2>Connect With Us & Engoy Life..! We Got This..!</h2>

            <p>We're your project handling experts. From concept to completion, we make it happen. Top-quality, on time, every time. Your success is our priority.</p>

            <p>Our experienced team ensures timely and top-notch delivery, no matter the project's size. We pride ourselves on clear communication and effective solutions, making us your ideal partner for seamless project management.</p>
            <br />

            <div className="hero-button --flex-start">
              <button className="--btn --btn-danger"><a href="/register">Register</a>
              </button>

              <button className="--btn --btn-primary" ><a href="/login">LogIn</a>
              </button>
            </div>

          </div>
        </section>
        <Footer/>
      </h1>
    </div>
  )
}

export default Home