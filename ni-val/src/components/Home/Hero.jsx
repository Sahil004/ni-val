import React from 'react'
import heroVideo from '../../Videos/hero-video.mp4'
const Hero = () => {
    return (
        <section className="hero home-hero">
            <video autoPlay loop muted playsInline className="background-video" onLoadedMetadata={(e) => e.target.playbackRate = 0.7}>
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="container">
                <div className="row align-items-center hero-page">
                    <div className="col-md-6">
                        <h1 className='hero-heading text-light'>Data-Driven Email Marketing for Lead Growth</h1>
                        <p className="hero-content text-light">Harness the power of automation and analytics to build stronger relationships and increase sales.</p>
                        <a className='btn service-button rounded-pill fw-semibold' href='/contact'>Get Started</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero