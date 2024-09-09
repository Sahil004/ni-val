import React from "react";
import Counters from "../Home/Counters";
import missionImage from "../../images/our-mission.jpg";
import serviceImage from "../../images/what-we-do.jpg";
import approachImage from "../../images/approach.jpg";
import integrityImage from "../../images/integrity.jpg";
import innovationImage from "../../images/innovation.jpg";
import excellenceImage from "../../images/excellence.jpg";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <main>
      <Helmet>
        <title>About Us - Ni-Val Technologies</title>
        <meta
          name="description"
          content="Learn more about Ni-Val Technologies, our mission, values, and the team behind our innovative lead generation strategies."
        />
        <meta
          name="keywords"
          content="Ni-Val Technologies, About Us, Lead Generation, B2B Services"
        />
        <meta property="og:title" content="About Us - Ni-Val Technologies" />
        <meta
          property="og:description"
          content="Learn more about Ni-Val Technologies, our mission, values, and the team behind our innovative lead generation strategies."
        />
      </Helmet>
      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center justify-content-end hero-page">
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
                About Us
              </h1>
              <p
                className="hero-content text-light"
                data-aos="fade-up"
                data-aos-duration="1300"
                data-aos-delay="600"
              >
                At <strong>Ni-Val</strong>, we specialize in transforming
                business growth through innovative and results-driven lead
                generation strategies. With a proven track record in B2B lead
                generation, we partner with companies to drive their sales
                pipeline and accelerate their growth.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <a
                  className="btn service-button rounded-pill fw-semibold"
                  href="/case_studies/how_it_works.pdf"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="700"
                  target="_blank"
                >
                  How It Works?
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us pt-0 mt-0">
        <div className="container">
          <div className="full-width">
            <Counters />
          </div>
          {/* Our Mission Section */}
          <div className="row py-5" data-aos="fade-left">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2 className="section-heading">Our Mission</h2>
              <p className="section-content">
                Our mission is to empower businesses with high-quality leads
                that convert into meaningful partnerships and revenue. In
                today’s competitive market, finding and nurturing the right
                prospects is crucial to success. Our team is dedicated to
                helping you reach your target audience with precision and
                efficiency.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={missionImage}
                alt="Our Mission"
                className="img-fluid about-img"
              />
            </div>
          </div>

          {/* What We Do Section */}
          <div className="container py-5">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6 col-md-12 px-0" data-aos="fade-right">
                <img
                  src={serviceImage}
                  alt="What We Do"
                  className="img-fluid about-img"
                />
              </div>
              <div
                className="col-xl-5 col-lg-6 col-md-10 mb-3"
                data-aos="fade-left"
              >
                <h1 className="section-heading">What We Do?</h1>
                <p className="section-content">
                  We leverage cutting-edge technology, data-driven insights, and
                  industry expertise to deliver tailored lead generation
                  solutions.
                </p>
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item" data-aos="fade-up">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Targeted Lead Generation
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Identifying and reaching out to potential clients who
                        are most likely to benefit from your offerings.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Lead Nurturing
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Engaging prospects with personalized content and
                        strategies to build relationships and drive conversions.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Market Research
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Providing deep insights into your industry and
                        competitors to refine your approach and optimize
                        results.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        Analytics and Reporting
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Offering detailed performance metrics to track success
                        and continuously improve our strategies.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Approach Section */}
          <div className="row py-5" data-aos="fade-up">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2 className="section-heading">Our Approach</h2>
              <p className="section-content">
                Our approach is rooted in understanding your unique business
                goals and challenges. We design and implement lead generation
                campaigns that align with your objectives, ensuring that every
                lead we generate has the potential to make a significant impact
                on your bottom line.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={approachImage}
                alt="Our Approach"
                className="img-fluid about-img"
              />
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="row py-5" data-aos="fade-left">
            <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center order-lg-2">
              <h2 className="section-heading">Why Choose Ni-Val?</h2>
              <p className="section-content">
                Selecting the right partner for lead generation is crucial for
                achieving your business goals. At Ni-Val, we stand out for our
                extensive experience in B2B lead generation across diverse
                industries. Our customized strategies ensure that every lead is
                highly relevant to your offerings, driving real business
                opportunities. We are committed to delivering results with
                transparency, providing clear communication and regular updates
                to keep you informed of your campaign’s performance.
              </p>
            </div>

            <div className="col-md-12 col-lg-6">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-5 service-box" data-aos="fade-up">
                    <a
                      href="/about#expertise"
                      className="service text-center d-block p-4 h-100"
                    >
                      <div className="service-logo mb-3">
                        <i className="fa fa-briefcase"></i>
                      </div>
                      <div className="service-content">
                        <h2 className="service-head">Industry Expertise</h2>
                        <p className="service-description">
                          Years of experience in B2B lead generation across
                          various industries.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-5 service-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <a
                      href="/about#customized-solutions"
                      className="service text-center d-block p-4 h-100"
                    >
                      <div className="service-logo mb-3">
                        <i className="fa fa-cogs"></i>
                      </div>
                      <div className="service-content">
                        <h2 className="service-head">Customized Solutions</h2>
                        <p className="service-description">
                          Tailored strategies that ensure leads are highly
                          relevant to your offerings.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-5 service-box"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <a
                      href="/about#results-driven"
                      className="service text-center d-block p-4 h-100"
                    >
                      <div className="service-logo mb-3">
                        <i className="fa fa-chart-line"></i>
                      </div>
                      <div className="service-content">
                        <h2 className="service-head">Results-Driven</h2>
                        <p className="service-description">
                          We generate leads that translate into real business
                          opportunities.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-5 service-box"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <a
                      href="/about#transparency"
                      className="service text-center d-block p-4 h-100"
                    >
                      <div className="service-logo mb-3">
                        <i className="fa fa-eye"></i>
                      </div>
                      <div className="service-content">
                        <h2 className="service-head">Transparency</h2>
                        <p className="service-description">
                          Clear communication with regular updates on campaign
                          performance.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values Section */}
          <div className="row mb-5" data-aos="fade-up">
            <div className="col-xl-9 mx-auto">
              <h2 className="section-heading text-center">Our Values</h2>
              <div className="row text-center">
                <div className="col-md-4 mb-4">
                  <div className="value-box h-100">
                    <img
                      src={integrityImage}
                      alt="Integrity"
                      className="img-fluid h-100"
                    />
                    <div className="value-overlay">
                      <h3 className="value-heading">Integrity</h3>
                      <div className="value-description">
                        <p>Honest communication and ethical practices.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="value-box h-100">
                    <img
                      src={innovationImage}
                      alt="Innovation"
                      className="img-fluid h-100"
                    />
                    <div className="value-overlay">
                      <h3 className="value-heading">Innovation</h3>
                      <div className="value-description">
                        <p>
                          Staying at the forefront of trends and technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="value-box h-100">
                    <img
                      src={excellenceImage}
                      alt="Excellence"
                      className="img-fluid h-100"
                    />
                    <div className="value-overlay">
                      <h3 className="value-heading">Excellence</h3>
                      <div className="value-description">
                        <p>Committed to exceeding client expectations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Us Section */}
          <div className="row mb-5 align-items-center" data-aos="fade-up">
            <div className="col-lg-8">
              <h2 className="section-heading">
                Contact us today to learn how <strong>Ni-Val</strong> can help
                you achieve your business goals.
              </h2>
            </div>
            <div className="col-lg-4">
              <a className="text-center section-button" href="/contact">
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
