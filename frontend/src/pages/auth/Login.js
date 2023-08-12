import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./loginform.css";
import icon from "../../assets/login.png"
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async () => {
    try{
      const response = await axios.post('http://localhost:5000/api/users/login',{
        email,
        password
      });

      if(response.data.token){
        localStorage.setItem('/register');
      }
    }
    catch(error){
      console.error(error);
    }
  }

  /*async function submit(e){
    e.preventDefault();

    try {

      await axios.post("http://localhost:5000/api/users/login",{
        email,password
      });

    } catch (e) {

      console.log(e);
      
    }
  }*/

  return(
    
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={icon} alt="" />
          </div>

          <form className="login100-form validate-form">
            <span className="login100-form-title">
              Sign In
            </span>
            
          <div class="wrap-input100 validate-input">
              <input className="input100" type="text" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
          </div>

          <div class="wrap-input100 validate-input">
              <input className="input100" type="password" placeholder="Password" required value={password} onChange={(e) => {setPassword(e.target.value)}}/>
          </div>
            
          <div class="container-login100-form-btn">
              <button className="login100-form-btn" onClick={submit}>
                Login
              </button>
          </div>

					<br />

          <Link to="/forgot">Forgot Password</Link>

          <br />
          <br />

          <Link to="/register">Register</Link>
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

export default Login