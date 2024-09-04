import React from 'react';
import payPerClick from '../../images/pay-per-click.jpg'; // Adjust the path as necessary

const PPCAdvertising = () => {
    return (
        <main className='service-page'>
            {/* Hero Section */}
            <section className="hero ppc-advertising">
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
                                Pay-Per-Click (PPC) Advertising
                            </h1>
                            <p
                                className="hero-content text-light"
                                data-aos="fade-up"
                                data-aos-duration="1300"
                                data-aos-delay="600"
                            >
                                Drive Targeted Traffic and Boost Conversions
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

            {/* Overview Section */}
            <section className="service-overview pt-5">
                <div className="container">
                    <div className="row align-items-center mb-5 our-service-row" id='ppc-advertising' data-aos="fade-up">
                        <div className="col-md-6 our-service-box ps-4" data-aos="fade-left">
                            <h2 className='section pb-4'>What We Offer</h2>
                            <p className="section-content">
                                Our PPC advertising service helps you drive targeted traffic to your website through paid search and display ads on platforms like Google Ads and LinkedIn. We optimize every aspect of your campaigns, from keyword selection to ad copy, to ensure maximum conversions with minimal ad spend.
                            </p>
                            <a className='text-center section-button' href='/contact'><span>Get Started</span></a>
                        </div>
                        <div className="col-md-6" data-aos="fade-right">
                            <img src={payPerClick} alt="Pay-Per-Click Advertising" className='service-img' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="service-details">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 service-box" data-aos="fade-up">
                            <div className="service text-center p-4 h-100">
                                <div className="service-logo mb-3">
                                    <i className="fab fa-google"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="service-head">How It Works</h2>
                                    <p className="service-description">
                                        We create targeted PPC campaigns designed to drive high-quality traffic to your site. This includes meticulous keyword research, ad creation, and continuous optimization to maximize ROI and ensure your ads reach the right audience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 service-box" data-aos="fade-up">
                            <div className="service text-center p-4 h-100">
                                <div className="service-logo mb-3">
                                    <i className="fas fa-ad"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="service-head">Our Approach</h2>
                                    <p className="service-description">
                                        Our approach includes detailed campaign strategy, continuous performance analysis, and adjustment of bids and ad copy to optimize results. We focus on maximizing your ad spend efficiency to achieve your business goals.
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
                                    <h2 className="service-head">What You Can Expect</h2>
                                    <p className="service-description">
                                        Expect increased targeted traffic, higher conversion rates, and improved ROI. Our PPC advertising services will help you achieve better visibility and reach your target audience effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta py-5 text-center container">
                <div className="row mb-5 align-items-center" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h2 className="section-heading">Ready to Drive More Traffic with PPC?</h2>
                    </div>
                    <div className="col-lg-4">
                        <a className='text-center section-button' href='/contact'><span>Contact Us</span></a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default PPCAdvertising;
