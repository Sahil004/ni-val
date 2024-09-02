import React from 'react'
import leadGeneration from '../../../images/lead-generation.jpg';

const Home = () => {
    return (
        <main className='service-page'>
            <section className="hero lead-generation">
                <div className="container">
                    <div className="row align-items-center hero-page">
                        <div
                            className="col-md-6"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="300"
                        >
                            <h1
                                className='hero-heading text-light'
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="500"
                            >
                                Lead Generation Strategy Development
                            </h1>
                            <p
                                className="hero-content text-light"
                                data-aos="fade-up"
                                data-aos-duration="1300"
                                data-aos-delay="600"
                            >
                                Crafting Custom Strategies for Business Growth
                            </p>
                            <a
                                className='btn service-button rounded-pill fw-semibold'
                                href='/contact'
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-delay="700"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-overview py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="section-title">What We Offer</h2>
                            <p className="section-content">
                                Our Lead Generation Strategy Development service is the foundation for a successful lead generation campaign. We craft customized strategies that align with your business goals, target the right audience, and utilize the most effective channels for lead acquisition. From initial consultation to ongoing optimization, we provide a roadmap for your business growth.
                            </p>
                            <a className="btn btn-primary rounded-pill" href="/contact">Get Started</a>
                        </div>
                        <div className="col-md-6">
                            <img src={leadGeneration} alt="Lead Generation Strategy Development" className="img-fluid shadow" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-details py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="detail-title">How It Works</h3>
                            <p className="detail-content">
                                We begin by understanding your business needs and goals. Our team then develops a tailored strategy that includes market research, target audience identification, and channel selection.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h3 className="detail-title">Our Approach</h3>
                            <p className="detail-content">
                                We use a data-driven approach to create and refine your lead generation strategy. This includes continuous optimization and adjustments based on performance metrics.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h3 className="detail-title">What You Can Expect</h3>
                            <p className="detail-content">
                                Expect a well-defined strategy that drives high-quality leads and enhances your sales pipeline. Our ongoing support ensures your strategy evolves with market trends.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta py-5 text-center">
                <div className="container">
                    <h2 className="cta-title">Ready to Transform Your Lead Generation?</h2>
                    <a className="btn btn-primary rounded-pill" href="/contact">Contact Us Today</a>
                </div>
            </section>

        </main>
    )
}

export default Home