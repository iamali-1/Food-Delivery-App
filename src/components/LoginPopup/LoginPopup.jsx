import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {
    const [ currstate , setCurrState] = useState("Login");
  return (
    <div className='login-popup'>
       <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currstate}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} />
        </div>
        <div className="login-popup-inputs">
            {currstate==="Login"?<></>:<input type='text' placeholder='Your Name' required/>}
             <input type='email' placeholder='Your Email' required/>
            <input type='password' placeholder='Password' required/>
        </div>
            <button>{currstate==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type = "checkbox" required/>
                <p>By Continuing, I Agree to the Terms of Use & Privacy Policy.</p>
            </div>
            {currstate==="Login"? <p>Create a New Account? <span onClick={()=>setCurrState("Sign Up")}> Click Here</span></p>
            :<p>Already Have an Account? <span onClick={()=>setCurrState("Login")}> Login Here</span></p>}
       </form>

    </div>
  )
}

export default LoginPopup;