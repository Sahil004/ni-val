import React from 'react'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="row align-items-center hero-page">
                    <div className="col-md-6">
                        <h1 className='hero-heading text-light'>Data-Driven Email Marketing for Lead Growth</h1>
                        <p className="hero-content text-light">Harness the power of automation and analytics to build stronger relationships and increase sales.</p>
                        <a className='btn service-button rounded-pill fw-semibold'>Our Services</a>
                        <ul class="nav pt-5 fs-5 social-icons">
                            <li class="nav-item"><a href="" class="nav-link text-white rounded-circle"><i
                                class="fa-brands fa-linkedin"></i></a></li>
                            <li class="nav-item"><a href="" class="nav-link text-white rounded-circle"><i
                                class="fa-brands fa-x-twitter"></i></a></li>
                            <li class="nav-item"><a href="" class="nav-link text-white rounded-circle"><i
                                class="fa-brands fa-facebook-f"></i></a></li>
                            <li class="nav-item"><a href="" class="nav-link text-white rounded-circle"><i
                                class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero