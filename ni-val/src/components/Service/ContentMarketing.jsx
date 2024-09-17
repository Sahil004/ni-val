import React from 'react';
import contentMarketing from '../../images/content-marketing.webp';
import contentMarketingLg from '../../images/content-marketing-lg.webp';

const ContentMarketing = () => {
    return (
        <main className='service-page'>
            {/* Inline Critical CSS */}
            <style>
                {`
                    .content-marketing {
                        background: linear-gradient(
                            rgba(0, 0, 0, 0.7),
                            rgba(0, 0, 0, 0.7)
                        ),
                        url(${contentMarketingLg}) no-repeat;
                        background-size: cover;
                        min-height: 100vh; /* Ensure proper height for initial load */
                    }
                `}
            </style>

            {/* Hero Section */}
            <section className="hero content-marketing">
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
                                Content Marketing
                            </h1>
                            <p
                                className="hero-content text-light"
                                data-aos="fade-up"
                                data-aos-duration="1300"
                                data-aos-delay="600"
                            >
                                Creating Valuable Content for Business Growth
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
                    <div className="row align-items-center mb-5 our-service-row" id='content-marketing' data-aos="fade-up">
                        <div className="col-md-6 our-service-box pe-4" data-aos="fade-right">
                            <h2 className='section pb-4'>What We Offer</h2>
                            <p className="section-content">We help you attract and engage prospects by creating valuable content that speaks directly to their pain points. Our content marketing services include developing blog posts, whitepapers, case studies, and other resources that position your business as an industry authority and drive organic traffic.</p>
                            <a className='text-center section-button' href='/contact'><span>Get Started</span></a>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <img src={contentMarketing} alt="Content Marketing" className='service-img' />
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
                                    <i className="fa fa-file-alt"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="service-head">How It Works</h2>
                                    <p className="service-description">We begin by understanding your target audience and industry. Our team develops content strategies that focus on delivering high-quality, relevant content to engage potential leads and build brand authority.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 service-box" data-aos="fade-up">
                            <div className="service text-center p-4 h-100">
                                <div className="service-logo mb-3">
                                    <i className="fa fa-lightbulb"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="service-head">Our Approach</h2>
                                    <p className="service-description">Using data-driven insights, we craft content that not only resonates with your audience but also improves SEO performance. We regularly update content to keep it relevant and impactful.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 service-box" data-aos="fade-up">
                            <div className="service text-center p-4 h-100">
                                <div className="service-logo mb-3">
                                    <i className="fa fa-chart-line"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="service-head">What You Can Expect</h2>
                                    <p className="service-description">You can expect to see increased organic traffic, enhanced brand credibility, and meaningful engagement with prospects. Our approach positions your brand as a thought leader in your industry.</p>
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
                        <h2 className="section-heading">Ready to Elevate Your Content Strategy?</h2>
                    </div>
                    <div className="col-lg-4">
                        <a className='text-center section-button' href='/contact'><span>Contact Us</span></a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ContentMarketing;
