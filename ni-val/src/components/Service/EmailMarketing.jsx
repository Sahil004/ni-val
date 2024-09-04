import React from 'react';
import emailMarketing from '../../images/email-marketing-lg.jpg';

const EmailMarketing = () => {
    return (
        <main className='service-page'>
            <section className="hero email-marketing">
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
                                Email Marketing Campaigns
                            </h1>
                            <p
                                className="hero-content text-light"
                                data-aos="fade-up"
                                data-aos-duration="1300"
                                data-aos-delay="600"
                            >
                                Nurturing Leads through Engaging Email Campaigns
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
                    <div className="row align-items-center mb-5 our-service-row" data-aos="fade-up">
                        <div className="col-md-6" data-aos="fade-right">
                            <img src={emailMarketing} alt="Email Marketing Campaigns" className='service-img' />
                        </div>
                        <div className="col-md-6 our-service-box ps-4" data-aos="fade-left">
                            <h2 className='section pb-4'>Our Email Marketing Services</h2>
                            <p className="section-content">
                                Our email marketing services are designed to nurture leads through targeted, engaging campaigns. Whether you need to generate new leads or move existing prospects through the sales funnel, our email campaigns are optimized for high open rates, click-through rates, and conversions.
                            </p>
                            <a className='text-center section-button' href='/contact'><span>Get Started</span></a>
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
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="service-head">How It Works</h2>
                                    <p className="service-description">We create personalized and targeted email campaigns based on data and insights to reach the right audience and achieve optimal results.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 service-box" data-aos="fade-up">
                            <div className="service text-center p-4 h-100">
                                <div className="service-logo mb-3">
                                    <i className="fa fa-chart-line"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="service-head">Our Approach</h2>
                                    <p className="service-description">We use a data-driven approach and A/B testing to refine the email campaigns continuously, ensuring maximum engagement and conversions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 service-box" data-aos="fade-up">
                            <div className="service text-center p-4 h-100">
                                <div className="service-logo mb-3">
                                    <i className="fa fa-tasks"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="service-head">What You Can Expect</h2>
                                    <p className="service-description">Expect high open rates, improved customer retention, and increased conversions as your prospects move through the sales funnel.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta py-5 text-center container">
                <div className="row mb-5 align-items-center" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h2 className="section-heading">Boost Your Business with Targeted Email Marketing!</h2>
                    </div>
                    <div className="col-lg-4">
                        <a className='text-center section-button' href='/contact'><span>Contact Us</span></a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default EmailMarketing;
