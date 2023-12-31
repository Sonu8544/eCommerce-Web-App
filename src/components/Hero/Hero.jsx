import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
    return (
        <>
            <section className=" page-width hero">
                <div className="hero-left">
                    <h2>NEW ARRIVALS ONLY</h2>
                    <div>
                        <div className="hero-hand-icon">
                            <p> <span>N</span>ew</p>
                            <img src={hand_icon} alt="" />
                        </div>
                        <p>collections</p>
                        <p>for everyone</p>
                    </div>
                    <div className="hero-latest-button">
                        <div>Lattest Collection</div>
                        <img src={arrow_icon} alt="Arrow icon" />
                    </div>
                </div>
                <div className="hero-right">
                    <img src={hero_image} alt="" />
                </div>
            </section>
        </>
    )
}

export default Hero
