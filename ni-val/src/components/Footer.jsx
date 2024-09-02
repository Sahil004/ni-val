import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* Footer Logo and Social Icons */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="footer-logo mb-3 pb-2">
                            <a href="/"><img src="/images/ni-val-brand.png" alt="Logo" /></a>
                        </div>
                        <p className='footer-text'>
                            Empowering Business Growth Through Precision and Innovation.
                        </p>
                        <ul className="nav pt-3 fs-5 social-icons">
                            <li className="nav-item">
                                <a href="https://www.linkedin.com" className="nav-link text-white rounded-circle" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://twitter.com" className="nav-link text-white rounded-circle" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.facebook.com" className="nav-link text-white rounded-circle" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.instagram.com" className="nav-link text-white rounded-circle" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Footer Links */}
                    <div className="col-md-6 col-lg-3 footer-nav mb-4">
                        <h4 className="text-white">Links</h4>
                        <ul className="list-unstyled">
                            <li><HashLink className="text-white" to="/">Home</HashLink></li>
                            <li><HashLink className="text-white" to="/services">Services</HashLink></li>
                            <li><HashLink className="text-white" to="/about">About</HashLink></li>
                            <li><HashLink className="text-white" to="/contact">Contact</HashLink></li>
                        </ul>
                    </div>

                    {/* Footer Services */}
                    <div className="col-md-6 col-lg-3 footer-services mb-4">
                        <h4 className="text-white">Services</h4>
                        <ul className="list-unstyled">
                            <li><HashLink className="text-white" to="/lead-generation">Lead Generation Strategy Development</HashLink></li>
                            <li><HashLink className="text-white" to="/email-marketing">Email Marketing Campaigns</HashLink></li>
                            <li><HashLink className="text-white" to="/service#content-marketing">Content Marketing</HashLink></li>
                            <li><HashLink className="text-white" to="/service#seo-optimization">SEO Optimization</HashLink></li>
                            <li><HashLink className="text-white" to="/service#social-media-leads">Social Media Lead Generation</HashLink></li>
                            <li><HashLink className="text-white" to="/service#ppc-advertising">Pay-Per-Click Advertising</HashLink></li>
                        </ul>
                    </div>

                    {/* Footer Contact */}
                    <div className="col-md-6 col-lg-3 footer-contact mb-4">
                        <h4 className="text-white">Contact</h4>
                        <div className="d-flex flex-column my-3">
                            <div className="d-flex pb-1 text-white opacity-75">
                                <i className="fa-solid fa-location-dot pe-3 pt-1"></i>S. No 13 Kharadi, Near Zensar, Thite Nagar, Kharadi, Pune, Maharashtra 411014
                            </div>
                            <div className="d-flex pb-1 text-white opacity-75">
                                <i className="fa-solid fa-phone pe-3 pt-1"></i>
                                <a href="tel:+919876543210" className='text-white'>+91 9876543210</a>
                            </div>
                            <div className="d-flex pb-1 text-white opacity-75">
                                <i className="fa-solid fa-envelope pe-3 pt-1"></i>
                                <a href="mailto:xyz@gmail.com" className='text-white'>xyz@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="row">
                    <div className="col-12 footer-bottom text-center">
                        <div className="copyright text-white">
                            © Copyright <strong><span>Ni-val Technologies</span></strong>. All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
