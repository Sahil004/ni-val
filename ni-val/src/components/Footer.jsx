import React from 'react';
import { Link } from 'react-router-dom';

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
                            <li><Link className="text-white" to="/">Home</Link></li>
                            <li><Link className="text-white" to="/service">Services</Link></li>
                            <li><Link className="text-white" to="/about">About</Link></li>
                            <li><Link className="text-white" to="/contact">Contact</Link></li>
                            <li><Link className="text-white" to="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Footer Services */}
                    <div className="col-md-6 col-lg-3 footer-services mb-4">
                        <h4 className="text-white">Services</h4>
                        <ul className="list-unstyled">
                            <li><Link className="text-white" to="/lead-generation">Lead Generation Strategy Development</Link></li>
                            <li><Link className="text-white" to="/email-marketing">Email Marketing Campaigns</Link></li>
                            <li><Link className="text-white" to="/content-marketing">Content Marketing</Link></li>
                            <li><Link className="text-white" to="/seo-optimization">SEO Optimization</Link></li>
                            <li><Link className="text-white" to="/social-media-leads">Social Media Lead Generation</Link></li>
                            <li><Link className="text-white" to="/ppc-advertising">Pay-Per-Click Advertising</Link></li>
                        </ul>
                    </div>

                    {/* Footer Contact */}
                    <div className="col-md-6 col-lg-3 footer-contact mb-4">
                        <h4 className="text-white">Contact</h4>
                        <div className="d-flex flex-column my-3">
                            <div className="d-flex pb-1 text-white opacity-75">
                                <i className="fa-solid fa-location-dot pe-3 pt-1"></i>S. No 13 Kharadi, Near Zensar, Kharadi,
                                Pune, Maharashtra 411014
                            </div>
                            <div className="d-flex pb-1 text-white opacity-75">
                                <i className="fa-solid fa-phone pe-3 pt-1"></i>
                                <a href="tel:+1 4696511980" className='text-white'>+1 4696511980</a>
                            </div>
                            <div className="d-flex pb-1 text-white opacity-75">
                                <i className="fa-solid fa-envelope pe-3 pt-1"></i>
                                <a href="mailto: info@ni-val.com" className='text-white'> info@ni-val.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="row">
                    <div className="col-12 footer-bottom text-center">
                        <div className="copyright text-white">
                            Copyright © 2024 <strong><span>Ni-val Technologies</span></strong>. All Rights Reserved | <a href="/privacy-policy" className='text-white'><u>Privacy Policy</u></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
