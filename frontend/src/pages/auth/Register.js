import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./loginform.css";
import icon from "../../assets/images-removebg-preview.png"
import axios from "axios";

const Register = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [bio, setBio] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {headers: {"Content-Type":"multipart/form-data"}};
        const newForm = new FormData();

        newForm.append("name",name);
        newForm.append("email",email);
        newForm.append("password",password);
        newForm.append("phone",phone);
        newForm.append("bio",bio);

        axios.post("http://localhost:5000/api/users/register", newForm, config).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err);
        })
    }


  return(
    
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={icon} alt="" />
            </div>

            <form className="login100-form validate-form" onSubmit={handleSubmit}>
                <span className="login100-form-title">
                    Registration
                </span>

                <div className="wrap-input100 validate-input" data-validate = "Valid name is required">
                    <input className="input100" type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <span className="focus-input100"></span>
                </div>
                        
                <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input className="input100" type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate = "Password is required">
                    <input className="input100" type="password" name="password"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <span className="focus-input100"></span>
                </div>
                        
                <div className="wrap-input100 validate-input" data-validate = "Valid contact number is required">
                    <input className="input100" type="text" name="phone"  placeholder="Contact Number" pattern="[0-9]{10}" required value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <span class="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate = "Valid Bio is required">
                    <input className="input100" type="text" name="bio" placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)}/>
                    <span className="focus-input100"></span>
                            
                </div>
                <br/>
                {/* 
                <span>Upload a file</span>
                <div className="wrap-input100 validate-input">
                    <input type="file" name="avatar" onChange={handleFileInputChange} accept=".png,.jpg,.jpeg"/>        
                </div>*/}
                        
                <div className="container-login100-form-btn">
                    <button className="login100-form-btn" name="btnSignUp">
                        Sign Up
                    </button>
                </div>

                <br/>

                <Link to="/login">Sign In</Link>
            </form>
	        </div>
	    </div>
	</div>
  )
}

export default Register