import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./loginform.css";
import icon from "../../assets/pngtree-forgetfulness-memory-loss-forgetting-png-image_6197481.png"

const Forgot = () => {

  const [email, setEmail] = useState("");

  return(
    
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={icon} alt="" />
          </div>

          <form className="login100-form validate-form">
            <span className="login100-form-title">
              Reset Password
            </span>
            
          <div class="wrap-input100 validate-input">
              <input className="input100" type="text" placeholder="Email" value={email}  onChange={(e) => {setEmail(e.target.value)}}/>
          </div>
            
          <div class="container-login100-form-btn">
              <button className="login100-form-btn" name="btnSubmit">
                Reset Password
              </button>
          </div>

		    <br />
            <br />

          <Link to="/">Home</Link>

          <br />
          <br />

          <Link to="/login">Login</Link>
				</form>
			</div>
		</div>
	</div>
  )


/*
  return <div className={`container ${styles.auth}`}>
  
    <Card>
      <div className={styles.form}>

          <div className="--flex-center">
            <BiLogIn size={35} color="#999"/>
          </div>

          <h2>LOGIN</h2>

          <div className="--flex-center">
            <button className="--btn --btn-google">Login With Google</button>
          </div>
          <br />

          <p className="--text-center --fw-bold">or</p>

          <form>
            <input type="email" placeholder="Email" required name="email" value={email} onChange={handleInputChange}/>

            <input type="password" placeholder="Password" required name="password" value={password} onChange={handleInputChange}/>

            <button type="submit" className="--btn --btn-primary --btn-block">Login</button>
          </form>
          <Link to="/forgot">Forgot Password</Link>
          
          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p></p>
            <Link to="/register">Register</Link>
          </span>

      </div>
    </Card>

  </div>
*/
}

export default Forgot