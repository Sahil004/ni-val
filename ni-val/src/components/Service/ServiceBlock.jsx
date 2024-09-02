import React from 'react';
import leadGeneration from '../../images/lead-generation.jpg';
import emailMarketing from '../../images/email-marketing.jpg';
import contentMarketing from '../../images/content-marketing.jpg';
import seoOptimization from '../../images/seo.jpg';
import socialMediaLeadGeneration from '../../images/social-media-lead-generation.jpg';
import payPerClick from '../../images/pay-per-click.jpg';

const ServiceBlock = () => {
    return (
        <section className="service-block">
            <div className="container">
                <div className="row align-items-center mb-5 our-service-row" id='lead-generation' data-aos="fade-up">
                    <div className="col-md-6 our-service-box pe-4" data-aos="fade-right">
                        <h2 className='section pb-4'>Lead Generation Strategy Development</h2>
                        <p className="section-content">Our Lead Generation Strategy Development service is the foundation for a successful lead generation campaign. We craft customized strategies that align with your business goals, target the right audience, and utilize the most effective channels for lead acquisition. From initial consultation to ongoing optimization, we provide a roadmap for your business growth.</p>
                        <a className='btn section-button rounded-pill fw-semibold' href='/lead-generation'>Know More</a>
                    </div>
                    <div className="col-md-6" data-aos="fade-left">
                        <img src={leadGeneration} alt="Lead Generation Strategy Development" className='service-img' />
                    </div>
                </div>
                <div className="row align-items-center mb-5 our-service-row" id='email-marketing' data-aos="fade-up">
                    <div className="col-md-6" data-aos="fade-right">
                        <img src={emailMarketing} alt="Email Marketing Campaigns" className='service-img' />
                    </div>
                    <div className="col-md-6 our-service-box ps-4" data-aos="fade-left">
                        <h2 className='section pb-4'>Email Marketing Campaigns</h2>
                        <p className="section-content">Our email marketing services are designed to nurture leads through targeted, engaging campaigns. Whether you need to generate new leads or move existing prospects through the sales funnel, our email campaigns are optimized for high open rates, click-through rates, and conversions.</p>
                        <a className='btn section-button rounded-pill fw-semibold' href='/email-marketing'>Know More</a>
                    </div>
                </div>
                <div className="row align-items-center mb-5 our-service-row" id='content-marketing' data-aos="fade-up">
                    <div className="col-md-6 our-service-box pe-4" data-aos="fade-right">
                        <h2 className='section pb-4'>Content Marketing</h2>
                        <p className="section-content">We help you attract and engage prospects by creating valuable content that speaks directly to their pain points. Our content marketing services include developing blog posts, whitepapers, case studies, and other resources that position your business as an industry authority and drive organic traffic.</p>
                        <a className='btn section-button rounded-pill fw-semibold' href='/service'>Know More</a>
                    </div>
                    <div className="col-md-6" data-aos="fade-left">
                        <img src={contentMarketing} alt="Content Marketing" className='service-img' />
                    </div>
                </div>
                <div className="row align-items-center mb-5 our-service-row" id='seo-optimization' data-aos="fade-up">
                    <div className="col-md-6" data-aos="fade-right">
                        <img src={seoOptimization} alt="SEO Optimization" className='service-img' />
                    </div>
                    <div className="col-md-6 our-service-box ps-4" data-aos="fade-left">
                        <h2 className='section pb-4'>SEO Optimization</h2>
                        <p className="section-content">Improve your online visibility and drive more organic traffic to your site with our SEO Optimization service. We conduct thorough keyword research, optimize on-page content, and build high-quality backlinks to ensure your website ranks higher in search engines for relevant queries.</p>
                        <a className='btn section-button rounded-pill fw-semibold' href='/service'>Know More</a>
                    </div>
                </div>
                <div className="row align-items-center mb-5 our-service-row" id='social-media-leads' data-aos="fade-up">
                    <div className="col-md-6 our-service-box pe-4" data-aos="fade-right">
                        <h2 className='section pb-4'>Social Media Lead Generation</h2>
                        <p className="section-content">Leverage the power of social media platforms like LinkedIn, Facebook, and Twitter to find and engage with potential leads. Our social media lead generation service includes creating targeted campaigns that capture the attention of decision-makers and influencers in your industry.</p>
                        <a className='btn section-button rounded-pill fw-semibold' href='/service'>Know More</a>
                    </div>
                    <div className="col-md-6" data-aos="fade-left">
                        <img src={socialMediaLeadGeneration} alt="Social Media Lead Generation" className='service-img' />
                    </div>
                </div>
                <div className="row align-items-center mb-5 our-service-row" id='ppc-advertising' data-aos="fade-up">
                    <div className="col-md-6" data-aos="fade-right">
                        <img src={payPerClick} alt="Pay-Per-Click Advertising" className='service-img' />
                    </div>
                    <div className="col-md-6 our-service-box ps-4" data-aos="fade-left">
                        <h2 className='section pb-4'>Pay-Per-Click (PPC) Advertising</h2>
                        <p className="section-content">Our PPC advertising service helps you drive targeted traffic to your website through paid search and display ads on platforms like Google Ads and LinkedIn. We optimize every aspect of your campaigns, from keyword selection to ad copy, to ensure maximum conversions with minimal ad spend.</p>
                        <a className='btn section-button rounded-pill fw-semibold' href='/service'>Know More</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceBlock;
