import React from 'react'
import aboutus from '../../images/home01.png' 
const Aboutus = () => {
  return (
    <section className='about-us'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={aboutus} alt="" srcset="" />
                </div>
                <div className="col-md-6">
                    <h4 className='section-subheading'>About us</h4>
                    <h2 className='section-heading'>Your Partner in High-Impact Lead Generation and Growth</h2>
                    <p className='section-content'>At Ni-val Technologies, we specialize in driving sustainable business growth through expert B2B lead generation and strategic marketing solutions. Our innovative, data-driven strategies help you connect with your ideal audience, nurture leads, and ultimately boost your sales pipeline.</p>
                    <p className='section-content'>With a strong focus on customization, transparency, and measurable results, we partner with companies to deliver high-quality leads that convert into valuable, long-term business opportunities. heading for this about section</p>
                    <a className='btn section-button rounded-pill fw-semibold' href='/about'>About Us</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutus