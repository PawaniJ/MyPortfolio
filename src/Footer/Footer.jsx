import React from 'react'
import './Footer.css'
import footer_logo from "/src/assets/footer_logo.svg";
import user_icon from "/src/assets/user_icon.svg";



const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src ={footer_logo} alt=''/>
               
                <p>I'm a passionate full stack developer specializing in the MARN stack (MongoDB, Angular, React, Node.js). 
                    I love creating dynamic web applications that deliver exceptional user experiences. 
                    If you're interested in collaborating or just want to chat, feel free to reach out to me at [your email] or [your phone number]. Let's connect!</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type ='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
           
           

        </div>
        <hr/>
        <div className="footer-bottom">
                <div className="footer-botton-left">
                    <div className="footer-bottom-right">
                        <p>Term of Services</p>
                        <p>Privacy Policy</p>
                        <p>Connect with me </p>
                        
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer