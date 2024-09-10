import React from 'react';
import seoOptimization from '../../images/seo.webp'; // Adjust the path as necessary

const SeoOptimizationPage = () => {
    return (
        <main className='service-page'>
            {/* Hero Section */}
            <section className="hero seo-optimization">
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
                                SEO Optimization
                            </h1>
                            <p
                                className="hero-content text-light"
                                data-aos="fade-up"
                                data-aos-duration="1300"
                                data-aos-delay="600"
                            >
                                Enhance Your Online Presence and Drive More Traffic
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
                    <div className="row align-items-center mb-5 our-service-row" id='seo-optimization' data-aos="fade-up">
                        <div className="col-md-6 our-service-box pe-4" data-aos="fade-right">
                            <h2 className='section pb-4'>What We Offer</h2>
                            <p className="section-content">
                                Our SEO Optimization service aims to boost your website’s visibility and drive organic traffic. We conduct comprehensive keyword research, optimize on-page elements, and build high-quality backlinks to enhance your search engine rankings.
                            </p>
                            <a className='text-center section-button' href='/contact'><span>Get Started</span></a>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <img src={seoOptimization} alt="SEO Optimization" className='service-img' />
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
                                    <i className="fa fa-search"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="service-head">How It Works</h2>
                                    <p className="service-description">
                                        We start by analyzing your website and industry to identify opportunities for improvement. Our team then implements strategies to optimize your content, enhance site structure, and build authoritative backlinks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 service-box" data-aos="fade-up">
                            <div className="service text-center p-4 h-100">
                                <div className="service-logo mb-3">
                                    <i className="fa fa-cogs"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="service-head">Our Approach</h2>
                                    <p className="service-description">
                                        Our approach combines technical SEO with content optimization and strategic link building. We focus on delivering measurable results and adapting strategies based on data-driven insights.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 service-box" data-aos="fade-up">
                            <div className="service text-center p-4 h-100">
                                <div className="service-logo mb-3">
                                    <i className="fa fa-line-chart"></i>
                                </div>
                                <div className="service-content">
                                    <h2 className="service-head">What You Can Expect</h2>
                                    <p className="service-description">
                                        Expect increased search engine visibility, higher organic traffic, and improved website performance. Our efforts will help you achieve long-term growth and enhanced user engagement.
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
                        <h2 className="section-heading">Ready to Improve Your SEO?</h2>
                    </div>
                    <div className="col-lg-4">
                        <a className='text-center section-button' href='/contact'><span>Contact Us</span></a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default SeoOptimizationPage;
