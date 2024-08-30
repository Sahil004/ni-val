import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Services = () => {
    return (
        <section className="services py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 mb-4">
                        <h4 className='section-subheading'>Our Services</h4>
                        <h2 className='section-heading'>Tailored Solutions for Accelerating Business Growth</h2>
                        <p className='section-content'>We specialize in driving B2B growth through customized lead generation strategies. Our services are designed to enhance your sales pipeline, nurture prospects, and provide in-depth market insights.</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="container">
                            <div className="row justify-content-center">
                                {[
                                    {
                                        iconClass: "fa fa-bullseye",
                                        heading: "Lead Generation Strategy Development",
                                        description: "Crafting customized strategies for lead acquisition.",
                                        detailPage: "/service/lead-generation"
                                    },
                                    {
                                        iconClass: "fa fa-envelope",
                                        heading: "Email Marketing Campaigns",
                                        description: "Designing and executing email campaigns targeted at potential leads.",
                                        detailPage: "/service/email-marketing"
                                    },
                                    {
                                        iconClass: "fa fa-pencil-alt",
                                        heading: "Content Marketing",
                                        description: "Creating content like whitepapers, case studies, and blog posts to attract leads.",
                                        detailPage: "/service/content-marketing"
                                    },
                                    {
                                        iconClass: "fa fa-search",
                                        heading: "SEO Optimization",
                                        description: "Enhancing website and content to rank higher in search engines.",
                                        detailPage: "/service/seo-optimization"
                                    },
                                    {
                                        iconClass: "fa fa-share-alt",
                                        heading: "Social Media Lead Generation",
                                        description: "Using social platforms to find and engage with potential leads.",
                                        detailPage: "/service/social-media-leads"
                                    },
                                    {
                                        iconClass: "fa fa-dollar-sign",
                                        heading: "Pay-Per-Click Advertising",
                                        description: "Running PPC campaigns on platforms like Google Ads or LinkedIn.",
                                        detailPage: "/service/ppc-advertising"
                                    }
                                ].map((service, index) => (
                                    <div key={index} className="col-md-5 col-lg-4 service-box">
                                        <div className="service text-center d-block p-4 h-100">
                                            <div className="service-logo mb-3">
                                                <i className={service.iconClass} aria-hidden="true"></i>
                                            </div>
                                            <div className="service-content">
                                                <h2 className="service-head">{service.heading}</h2>
                                                <p className="service-description">{service.description}</p>
                                                <a href={service.detailPage} className="btn btn-secondary mt-3 text-white">Know More</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
