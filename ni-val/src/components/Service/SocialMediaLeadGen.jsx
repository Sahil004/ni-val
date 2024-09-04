import React from 'react';
import socialMediaLeadGeneration from '../../images/social-media-lead-generation.jpg'; // Adjust the path as necessary

const SocialMediaLeads = () => {
    return (
        <main className='service-page'>
            {/* Hero Section */}
            <section className="hero social-media-leads">
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
                                Social Media Lead Generation
                            </h1>
                            <p
                                className="hero-content text-light"
                                data-aos="fade-up"
                                data-aos-duration="1300"
                                data-aos-delay="600"
                            >
                                Harness the Power of Social Media for Quality Leads
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
                    <div className="row align-items-center mb-5 our-service-row" id='social-media-leads' data-aos="fade-up">
                        <div className="col-md-6 our-service-box pe-4" data-aos="fade-right">
                            <h2 className='section pb-4'>What We Offer</h2>
                            <p className="section-content">
                                Leverage the power of social media platforms like LinkedIn, Facebook, and Twitter to find and engage with potential leads. Our social media lead generation service includes creating targeted campaigns that capture the attention of decision-makers and influencers in your industry.
                            </p>
                            <a className='text-center section-button' href='/contact'><span>Get Started</span></a>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <img src={socialMediaLeadGeneration} alt="Social Media Lead Generation" className='service-img' />
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
                                    <i className="fa-brands fa-facebook-f"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="service-head">How It Works</h2>
                                    <p className="service-description">
                                        We develop targeted social media campaigns to engage potential leads. Our approach includes identifying key platforms, crafting compelling messages, and optimizing campaigns to reach decision-makers and influencers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 service-box" data-aos="fade-up">
                            <div className="service text-center p-4 h-100">
                                <div className="service-logo mb-3">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="service-head">Our Approach</h2>
                                    <p className="service-description">
                                        Our approach involves detailed audience analysis, creative campaign design, and ongoing performance tracking. We leverage data to continually refine and improve your social media lead generation strategies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 service-box" data-aos="fade-up">
                            <div className="service text-center p-4 h-100">
                                <div className="service-logo mb-3">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="service-head">What You Can Expect</h2>
                                    <p className="service-description">
                                        Expect to see increased engagement, higher-quality leads, and improved brand presence across social media platforms. Our service will help you connect with key industry influencers and decision-makers.
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
                        <h2 className="section-heading">Ready to Boost Your Social Media Lead Generation?</h2>
                    </div>
                    <div className="col-lg-4">
                        <a className='text-center section-button' href='/contact'><span>Contact Us</span></a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default SocialMediaLeads;
