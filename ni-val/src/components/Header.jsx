import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container d-flex justify-content-between align-items-center">
                    {/* Brand */}
                    <Link className="navbar-brand" to="/">
                        <img src="/images/ni-val-brand.webp" alt="Ni-val Logo" loading='lazy' />
                    </Link>

                    {/* Offcanvas Toggler */}
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Offcanvas Menu */}
                    <div
                        className="offcanvas offcanvas-end d-lg-none"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle"
                                        to="/service"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Services
                                    </Link>
                                    <ul className="dropdown-menu border-0 fs-6">
                                        <li><Link className="d-block dropdown-item py-2" to="/lead-generation">Lead Generation Strategy Development</Link></li>
                                        <li><Link className="dropdown-item py-2" to="/email-marketing">Email Marketing Campaigns</Link></li>
                                        <li><Link className="dropdown-item py-2" to="/content-marketing">Content Marketing</Link></li>
                                        <li><Link className="dropdown-item py-2" to="/social-media-leads">Social Media Lead Generation</Link></li>
                                        <li><Link className="dropdown-item py-2" to="/seo-optimization">SEO Optimization</Link></li>
                                        <li><Link className="dropdown-item py-2" to="/ppc-advertising">Pay-Per-Click (PPC) Advertising</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle"
                                        to="/about-us"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        About
                                    </Link>
                                    <ul className="dropdown-menu border-0 fs-6">
                                        <li><Link className="d-block dropdown-item py-2" to="/about-us">About Us</Link></li>
                                        <li><Link className="d-block dropdown-item py-2" to="/our-team">Our Team</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle"
                                        to="/about-us"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        About
                                    </Link>
                                    <ul className="dropdown-menu border-0 fs-6">
                                        <li><Link className="d-block dropdown-item py-2" to="/Case Study">Case Study</Link></li>
                                        <li><Link className="d-block dropdown-item py-2" to="/Corporate Deck">Corporate Deck</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/privacy-policy">Privacy Policy</Link>
                                </li>
                                <li className="nav-item mt-5 mt-lg-0">
                                    <Link className='text-center section-button' to="/contact"><span>Contact Us</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Normal Navbar Links (visible on large screens) */}
                    <div className="collapse navbar-collapse d-none d-lg-flex">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/service"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Services
                                </Link>
                                <ul className="dropdown-menu border-0 fs-6 mt-4">
                                    <li><Link className="dropdown-item py-2" to="/lead-generation">Lead Generation Strategy Development</Link></li>
                                    <li><Link className="dropdown-item py-2" to="/email-marketing">Email Marketing Campaigns</Link></li>
                                    <li><Link className="dropdown-item py-2" to="/content-marketing">Content Marketing</Link></li>
                                    <li><Link className="dropdown-item py-2" to="/social-media-leads">Social Media Lead Generation</Link></li>
                                    <li><Link className="dropdown-item py-2" to="/seo-optimization">SEO Optimization</Link></li>
                                    <li><Link className="dropdown-item py-2" to="/ppc-advertising">Pay-Per-Click (PPC) Advertising</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/about-us"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    About
                                </Link>
                                <ul className="dropdown-menu border-0 fs-6 mt-4">
                                    <li><Link className="dropdown-item py-2" to="/about-us">About Us</Link></li>
                                    <li><Link className="dropdown-item py-2" to="/our-team">Our Team</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/about-us"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Resources
                                </Link>
                                <ul className="dropdown-menu border-0 fs-6">
                                    <li><Link className="d-block dropdown-item py-2" to="/case-Study">Case Study</Link></li>
                                    <li><Link className="d-block dropdown-item py-2" to="/Corporate Deck">Corporate Deck</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/privacy-policy">Privacy Policy</Link>
                            </li>
                            {/* Add extra space before Contact link */}
                            <li className="nav-item ms-lg-5">
                                <Link className='text-center section-button' to="/contact"><span>Contact Us</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
