import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container d-flex justify-content-between align-items-center">
                    {/* Brand */}
                    <Link className="navbar-brand" to="/"><img src="/images/ni-val-brand.png" alt="Logo" /></Link>

                    {/* Offcanvas Toggler */}
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Offcanvas Menu */}
                    <div className="offcanvas offcanvas-end d-lg-none" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <HashLink className="nav-link dropdown-toggle" to="/service" role="button" data-bs-toggle="dropdown">
                                        Services
                                    </HashLink>
                                    <ul className="dropdown-menu border-0 fs-6">
                                        <li><HashLink className="dropdown-item py-2 fw-light" to="/service#lead-generation">Lead Generation Strategy Development</HashLink></li>
                                        <li><HashLink className="dropdown-item py-2 fw-light" to="/service#email-marketing">Email Marketing Campaigns</HashLink></li>
                                        <li><HashLink className="dropdown-item py-2 fw-light" to="/service#content-marketing">Content Marketing</HashLink></li>
                                        <li><HashLink className="dropdown-item py-2 fw-light" to="/service#social-media-leads">Social Media Lead Generation</HashLink></li>
                                        <li><HashLink className="dropdown-item py-2 fw-light" to="/service#seo-optimization">SEO Optimization</HashLink></li>
                                        <li><HashLink className="dropdown-item py-2 fw-light" to="/service#ppc-advertising">Pay-Per-Click (PPC) Advertising</HashLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
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
                                <HashLink className="nav-link dropdown-toggle" to="/service" role="button" data-bs-toggle="dropdown">
                                    Services
                                </HashLink>
                                <ul className="dropdown-menu border-0 fs-6">
                                    <li><HashLink className="dropdown-item py-2 fw-light" to="/lead-generation">Lead Generation Strategy Development</HashLink></li>
                                    <li><HashLink className="dropdown-item py-2 fw-light" to="/email-marketing">Email Marketing Campaigns</HashLink></li>
                                    <li><HashLink className="dropdown-item py-2 fw-light" to="/service#content-marketing">Content Marketing</HashLink></li>
                                    <li><HashLink className="dropdown-item py-2 fw-light" to="/service#seo-optimization">SEO Optimization</HashLink></li>
                                    <li><HashLink className="dropdown-item py-2 fw-light" to="/service#social-media-leads">Social Media Lead Generation</HashLink></li>
                                    <li><HashLink className="dropdown-item py-2 fw-light" to="/service#ppc-advertising">Pay-Per-Click (PPC) Advertising</HashLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
