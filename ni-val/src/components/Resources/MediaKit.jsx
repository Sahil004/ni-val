import React from 'react';
import { Helmet } from 'react-helmet';
import mediaKitCover from '../../images/mediakit.png';  // Replace with your media kit image

const MediaKit = () => {
    return (
        <main>
            <Helmet>
                <title>Media Kit | Ni-Val</title>
                <meta name="description" content="Download Ni-Val's media kit to learn more about our services, company overview, and key stats." />
                <link rel="canonical" href="https://www.ni-val.com/media-kit" />
            </Helmet>

            {/* Hero Section */}
            <section className="media-kit-hero" data-aos="fade-up">
                <div className="container">
                    <div className="row align-items-center media-hero-page">
                        <div className="col-md-6 col-lg-6">
                            <h1 className="kit-heading" data-aos="fade-up">
                                Download Our Media Kit
                            </h1>
                            <p
                                className="kit-content fs-5"
                                data-aos="fade-up"
                                data-aos-duration="1300"
                                data-aos-delay="600"
                            >
                                Get insights into Ni-Val's services, key statistics, and company overview with our comprehensive media kit.
                            </p>
                            <a
                                className="btn kit-button rounded-pill fw-semibold"
                                href="/case_studies/Ni-Val_MediaKit.pdf"
                                rel="noopener noreferrer"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-delay="700"
                                target="_blank"
                            >
                                View Media Kit
                            </a>
                        </div>
                        <div className="d-none d-md-block col-md-6">
                            <img src={mediaKitCover} alt="Media Kit Cover" className="img-fluid kit-shadow" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MediaKit;
