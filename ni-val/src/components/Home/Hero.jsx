import React from "react";
import heroVideo from "../../Videos/hero-video.mp4";

const Hero = () => {
  return (
    <section className="hero home-hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        onLoadedMetadata={(e) => (e.target.playbackRate = 0.7)}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <div className="row align-items-center hero-page">
          <div
            className="col-md-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <h1
              className="hero-heading text-light"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              Data-Driven Email Marketing for Lead Growth
            </h1>
            <p
              className="hero-content text-light"
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-delay="600"
            >
              Harness the power of automation and analytics to build stronger
              relationships and increase sales.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a
                className="btn service-button rounded-pill fw-semibold me-0 me-md-4"
                href="/contact"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="700"
              >
                Get Started
              </a>
              <a
                className="btn service-button rounded-pill fw-semibold"
                href="/case_studies/Case_study_Ni-Val.pdf"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="700"
                target="_blank"
              >
                Case Study
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
