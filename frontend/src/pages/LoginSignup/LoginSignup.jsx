import React, {useState} from 'react'

import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'

export const LoginSignup = () => {

  const [action, setAction] = useState("Login");
   

  return (
    <div className='body'>
      <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        <form className='inputs'>
          {action==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="user icon" />
            <input type="text" placeholder='Name'/>
          </div>}
          <div className="input">
            <img src={email_icon} alt="email icon" />
            <input type="email" placeholder='Email addresse'/>
          </div>
          <div className="input">
            <img src={password_icon} alt="password icon" />
            <input type="password" placeholder='password'/>
          </div>
          {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here</span></div>}
          <div className="submit-container">
            <button className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign UP</button>
            <button className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
