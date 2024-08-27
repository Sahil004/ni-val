import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-logo mb-3 pb-2">
                            <a href="#"><img src="/images/ni-val-brand.png" alt="Logo" /></a>
                        </div>
                        <p className='footer-text'>
                            Empowering Business Growth Through Precision and Innovation.
                        </p>
                        <ul className="nav pt-3 fs-5 social-icons">
                            <li className="nav-item">
                                <a href="" className="nav-link text-white rounded-circle">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link text-white rounded-circle">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link text-white rounded-circle">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link text-white rounded-circle">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 footer-nav">
                        <h4 className="text-white">Links</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Home</a></li>
                            <li><a href="#work" className="text-white">Work</a></li>
                            <li><a href="#Services" className="text-white">Services</a></li>
                            <li><a href="#testimony" className="text-white">Clients</a></li>
                            <li><a href="#contact" className="text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 footer-services">
                        <h4 className="text-white">Services</h4>
                        <ul className="list-unstyled">
                            <li><a href="#services" className="text-white">Design</a></li>
                            <li><a href="#services" className="text-white">Technologies</a></li>
                            <li><a href="#services" className="text-white">Business</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 footer-nav">
                        <h4 className="text-white">Contact</h4>
                        <div className="d-flex flex-column my-3">
                            <div className="d-flex pb-1 text-white opacity-75">
                                <i className="fa-solid fa-location-dot pe-3 pt-1"></i>S. No 13 Kharadi, Near Zensar, Thite Nagar, Kharadi, Pune, Maharashtra 411014
                            </div>
                            <div className="d-flex pb-1 text-white opacity-75">
                                <i className="fa-solid fa-phone pe-3 pt-1"></i>
                                <a href="tel:+91 9876543210" className='text-white'>+91 9876543210</a>
                            </div>
                            <div className="d-flex pb-1 text-white opacity-75">
                                <i className="fa-solid fa-envelope pe-3 pt-1"></i>
                                <a href="mailto:xyx@gmail.com" className='text-white'>xyz@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="container footer-bottom">
                        <div class="copyright text-white text-center">
                            © Copyright <strong><span>Saviour Technologies</span></strong>. All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
