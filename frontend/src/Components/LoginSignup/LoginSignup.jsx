import React, {useState} from 'react'
import './LoginSignup.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

export const LoginSignup = () => {

  const [action, setAction] = useState("Login");
   

  return (
    <div Class='container'>
      <div Class='header'>
        <div Class='text'>{action}</div>
        <div Class='underline'></div>
      </div>
      <form Class='inputs'>
        {action==="Login"?<div></div>:<div Class="input">
          <img src={user_icon} alt="user icon" />
          <input type="text" placeholder='Name'/>
        </div>}
        <div Class="input">
          <img src={email_icon} alt="email icon" />
          <input type="email" placeholder='Email addresse'/>
        </div>
        <div Class="input">
          <img src={password_icon} alt="password icon" />
          <input type="password" placeholder='password'/>
        </div>
        {action==="Sign Up"?<div></div>:<div Class="forgot-password">Lost Password? <span>Click Here</span></div>}
        <div Class="submit-container">
          <button Class={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign UP</button>
          <button Class={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</button>
        </div>
      </form>
    </div>
  )
}
