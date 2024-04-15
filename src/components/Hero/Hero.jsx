import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "./hero_image.png";
import hero_image_back from "./hero_image_back.png";
import Heart from "./heart.png";
import Calories from "./calories.png";

const Hero = () => {
  return (
    <>
    <div className="hero">
        <div className="left-h">
            
            <Header/>
{/* the best ad */}
            <div className="the-best-ad">
              <div></div>
              <span>The Best Fitness Club in the Town</span>
              </div>
          {/* Hero Heading */}
          <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
            </div>
            <div><span>Ideal body</span></div>
          
          <div><span>in here we will help 
              you to shape and build your 
              ideal body and live up your 
              life to fullest</span></div>
              </div>
        
        {/* figures */}
        <div className="figures">
          <div><span>+140</span><span>expert coachs</span></div>
          <div><span>+978</span><span>members joined</span></div>
          <div><span>+50</span><span>fitness programs</span></div>
        </div>
        {/*hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
        </div>
        <div className="right-h">
          <button className="btn">Login</button>

          <div className="heart-rate">
            <img src={Heart} alt=""/>
            <span>Heart Rate</span>
            <span>166 bpm</span>
          </div>

          {/*here images */}
          <img src={hero_image} alt="" className="hero-image" />
          <img src={hero_image_back} alt="" className="hero-image-back"/>
          {/* calories */}
          <div className="calories">
            <img src={Calories} alt=""/>
            <span>Calories Burned </span>
            <span>220 kcal</span>
          </div>
        </div>
      
    </div></>
  )
}

export default Hero