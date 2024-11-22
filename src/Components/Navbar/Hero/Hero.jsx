import React from 'react'
import './Hero.css'
import profile_img from "../../../assets/Profile_pict.png";


const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img className='prof'  src={profile_img} alt="Profile" />
        <h1>
           <span>I'm Pawani Jayaweera ,</span>  full-stack developer
        </h1>
        <p>
        I'm a Software Engineering student passionate about coding and problem-solving. 
        I build functional,<br/> user-friendly websites and continually strive to improve my web development skills.
        </p>
        <div className='hero-action'>
            <div className='hero-connect'>
                Connect with me
            </div>
            <div className='hero-resume'>
                My resume
            </div>
        </div>
    </div>
  )
}

export default Hero