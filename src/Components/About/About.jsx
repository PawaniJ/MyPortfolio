import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/Profile-img2.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1> About me </h1>
            <img src = {theme_pattern} alt = "Picture1"/>
        </div>
            <div className='about-sections'> 
              
                <div className='about-left'>
                    <img className='prof1'  src = {profile_img} alt = "Picture"/>
                    
                </div>
                <div  className='about-right'>
                    <div className="about-para">
                        <p>
                        As a full-stack developer and dedicated software engineering student, I am passionate about
                        creating innovative and efficient web solutions. My expertise spans front-end and back-end
                        development, allowing me to build robust, user-friendly applications. With a strong foundation in
                        technologies like React.js, Node.js, and Firebase, I continuously strive to enhance my skills and deliver
                        high-quality projects that solve real-world problems.
                        </p>

                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p><hr style={{width:"50%"}}/>HTML & CSS</p></div>
                        <div className="about-skill"><p><hr style={{width:"70%"}}/>Javascript</p></div>
                        <div className="about-skill"><p><hr style={{width:"60%"}}/>React.js</p></div>
                        <div className="about-skill"><p><hr style={{width:"50%"}}/>Node.js</p></div>
                        <div className="about-skill"><p><hr style={{width:"40%"}}/>Firebase</p></div>
                    </div>
                </div>

            </div>
            <div className="about-achivements">
                <div className="abou-achivement">
                    <h1> 10+</h1>
                    <p>YESRS OF EXPERIANCE</p>
                </div>
                <hr/>
                <div className="abou-achivement">
                    <h1> 90+</h1>
                    <p>PROJECTS COMPLLETED</p>
                </div>
                <hr/>
                <div className="abou-achivement">
                    <h1> 15+</h1>
                    <p>HAPPY CLIENT</p>
                </div>
                
            </div>

    </div>

  )
}

export default About