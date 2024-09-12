import React from 'react';
import leadGeneration from '../../images/lead-generation.webp';

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

            <section className="service-overview pt-5">
                <div className="container">
                    <div className="row align-items-center mb-5 our-service-row" id='lead-generation' data-aos="fade-up">
                        <div className="col-md-6 our-service-box pe-4" data-aos="fade-right">
                            <h2 className='section pb-4'>What We Offer</h2>
                            <p className="section-content">Our Lead Generation Strategy Development service is the foundation for a successful lead generation campaign. We craft customized strategies that align with your business goals, target the right audience, and utilize the most effective channels for lead acquisition. From initial consultation to ongoing optimization, we provide a roadmap for your business growth.</p>
                            <a className='text-center section-button' href='/contact'><span>Get Started</span></a>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <img src={leadGeneration} alt="Lead Generation Strategy Development" className='service-img' />
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-details">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 service-box" data-aos="fade-up">
                            <div className="service text-center p-4 h-100">
                                <div className="service-logo mb-3">
                                    <i className="fas fa-lightbulb"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="service-head">How It Works</h2>
                                    <p className="service-description">We begin by understanding your business needs and goals. Our team then develops a tailored strategy that includes market research, target audience identification, and channel selection.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 service-box" data-aos="fade-up">
                            <div className="service text-center p-4 h-100">
                                <div className="service-logo mb-3">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="service-head">Our Approach</h2>
                                    <p className="service-description">We use a data-driven approach to create and refine your lead generation strategy. This includes continuous optimization and adjustments based on performance metrics.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 service-box" data-aos="fade-up">
                            <div className="service text-center p-4 h-100">
                                <div className="service-logo mb-3">
                                    <i className="fas fa-cogs"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="service-head">What You Can Expect</h2>
                                    <p className="service-description">Expect a well-defined strategy that drives high-quality leads and enhances your sales pipeline. Our ongoing support ensures your strategy evolves with market trends.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta py-5 text-center container">
                <div className="row mb-5 align-items-center" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h2 className="section-heading">Ready to Transform Your Lead Generation?</h2>
                    </div>
                    <div className="col-lg-4">
                        <a className='text-center section-button' href='/contact'><span>Contact Us</span></a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
