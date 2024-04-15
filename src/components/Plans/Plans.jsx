import React from 'react'
import "./Plans.css"
import {plansData} from '../../data/plansData'
import whiteTick from "./whiteTick.png"
const Plans = () => {
  return (
    <div className="plans-container">
        <div className="programs-header" style={{gap: '2rem'}}>
            <span className="stroke-text">Ready to start</span>
            <span>your journey</span>
            <span className="stroke-text">now with us</span>
        </div>
        {/* plans card*/}
        <div className="plans">
            {plansData.map((plan,i) => (
                <div className="plan" key={i}>
                    {plan.icon}
                    <spna>{plan.name}</spna>
                    <spna>$ {plan.price}</spna>

                    <div className="features">
                        {plan.features.map((features,i) => (
                            <div className="features">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{features}</span>
                            </div>
                        ))}
                    </div>
                    <div><span>See more benefits - </span></div>
                    <div><button className="btn">Join now</button></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans