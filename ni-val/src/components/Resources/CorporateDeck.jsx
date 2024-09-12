import React from 'react';
import { Helmet } from 'react-helmet';
import corporateDeckCover from '../../images/corporate_deck.png';

const CorporateDeck = () => {
    return (
        <main>
            <Helmet>
                <title>Corporate Deck | Ni-Val</title>
                <meta name="description" content="Discover Ni-Val's corporate deck to learn how we accelerate business growth through innovative lead generation strategies." />
                <link rel="canonical" href="https://www.ni-val.com/corporate-deck" />
            </Helmet>

            {/* Hero Section */}
            <section className="corporate-deck-hero" data-aos="fade-up">
                <div className="container">
                    <div className="row align-items-center corporate-hero-page">
                        <div className="col-md-6 col-lg-6">
                            <h1 className="deck-heading" data-aos="fade-up">
                                Explore Our Corporate Deck
                            </h1>
                            <p
                                className="deck-content fs-5"
                                data-aos="fade-up"
                                data-aos-duration="1300"
                                data-aos-delay="600"
                            >
                                Learn how Ni-Val accelerates business growth through innovative lead generation strategies.
                            </p>
                            <a
                                className="btn deck-button rounded-pill fw-semibold"
                                href="/case_studies/Ni-Val Corporate Deck.pdf"
                                rel="noopener noreferrer"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-delay="700"
                                target="_blank"
                            >
                                View Corporate Deck
                            </a>
                        </div>
                        <div className="d-none d-md-block col-md-6">
                            <img src={corporateDeckCover} alt="Corporate Deck Cover" className="img-fluid deck-shadow" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CorporateDeck;
