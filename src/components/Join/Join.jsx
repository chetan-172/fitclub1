import React from 'react'
import './Join.css'
import emailjs from "@emailjs/browser"
const Join = () => {
    
  return (
    <div className="Join" id="join-us">
     <div className="left-j">
        <div>
            <span className="stroke-text">Ready to</span>
            <span>Level up</span>
        </div>
        <div>
            <span>Your body</span>
            <span className="stroke-text">with us?</span>
        </div>

     </div>
     <div className="right-j">
         <from action=""  className="email-container">
            <input type="email" name="user_email" placeholder="Enter your email address"></input>
            <button className="btn btn-j">Join Now</button>
         </from>
     </div>

    </div>
  )
}

export default Join