import React from 'react';
import aboutus from '../../images/home01.png';

const Aboutus = () => {
  return (
    <section className='about-us'>
      <div className="container">
        <div className="row align-items-center">
          <div 
            className="col-md-6" 
            data-aos="fade-right" 
            data-aos-duration="1500"  
            data-aos-delay="200"
          >
            <img src={aboutus} alt="About Us" className="img-fluid" />
          </div>
          
          <div 
            className="col-md-6" 
            
          >
            <h4 
              className='section-subheading'
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              About us
            </h4>
            <h2 
              className='section-heading'
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              Your Partner in High-Impact Lead Generation and Growth
            </h2>
            <p 
              className='section-content'
              data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-delay="700"
            >
              At Ni-val Technologies, we specialize in driving sustainable business growth through expert B2B lead generation and strategic marketing solutions. Our innovative, data-driven strategies help you connect with your ideal audience, nurture leads, and ultimately boost your sales pipeline.
            </p>
            <p 
              className='section-content'
              data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-delay="800"
            >
              With a strong focus on customization, transparency, and measurable results, we partner with companies to deliver high-quality leads that convert into valuable, long-term business opportunities.
            </p>
            <a 
              className='text-center section-button' 
              href='/about'
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="900"
            >
              <span>About Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
