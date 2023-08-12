import React, { useState } from 'react'
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"
import "../../pages/auth/loginform.css"

const PasswordInput = ({placeholder, value, name}) => {
    const [showPassword, setShowPassword] = useState(false);
    
    const toglePassword = () => {
        setShowPassword(!showPassword)
    }

  return (
    <div className="wrap-input100 validate-input">
        <input className="input100"
            type={showPassword ? "text" : "password"} 
            placeholder={placeholder}
            required 
            name={name}
        />
        <div onClick={toglePassword}>
            {showPassword ? (
                <AiOutlineEyeInvisible size={20}/>
            ):(
                <AiOutlineEye size={20}/>
            )}
        </div>
    </div>
  )
}

export default PasswordInput