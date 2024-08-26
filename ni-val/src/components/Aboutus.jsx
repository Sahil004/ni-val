import React from 'react'
import aboutus from '../images/home-page-01.png' 
const Aboutus = () => {
  return (
    <section className='about-us'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={aboutus} alt="" srcset="" />
                </div>
                <div className="col-md-6">
                    <h4 className='about-subheading'>About us</h4>
                    <h2 className='about-heading'>Your Partner in High-Impact Lead Generation and Growth</h2>
                    <p className='about-content'>At Ni-val Technologies, we specialize in driving sustainable business growth through expert B2B lead generation and strategic marketing solutions. Our innovative, data-driven strategies help you connect with your ideal audience, nurture leads, and ultimately boost your sales pipeline.</p>
                    <p className='about-content'>With a strong focus on customization, transparency, and measurable results, we partner with companies to deliver high-quality leads that convert into valuable, long-term business opportunities. heading for this about section</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutus