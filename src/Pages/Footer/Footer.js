import { Link } from '@mui/material';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (

        // footer page

        <footer className="py-5 footer-style-bg">
            <div className=" container  d-flex  justify-content-center">
                <div className=" d-lg-flex d-md-flex justify-content-center w-50">
                    <div className="container">
                        <Link className=" text-white">
                            <h6> <i className="fas fa-laptop-code"></i> Service</h6>
                        </Link>
                        <Link className=" text-white">
                            <h6><i className="fas fa-blog"></i> Blog</h6>
                        </Link>
                        <Link className=" text-white">
                            <h6><i className="fas fa-address-card"></i> About</h6>
                        </Link>
                        <Link className=" text-white">
                            <h6><i className="fas fa-angle-double-right"></i> Learn more</h6>
                        </Link>

                    </div>

                    {/* contact */}

                    <div className="container">
                        <Link className=" text-white">
                            <h6><i className="fas fa-address-book"></i> Contact</h6>
                        </Link>
                        <Link className=" text-white">
                            <h6><i className="fas fa-question"></i>  Help line</h6>
                        </Link>
                        <h6 className="text-white"><i className="fas fa-mobile-alt"></i> Mobile: 017654592</h6>
                        <small className="text-white"><i className="fas fa-envelope-square"></i> Email: Rukon.js@gamil.com</small>
                    </div>

                    {/* Means of communication */}

                    <div className="container">
                        <Link className=" text-white">
                            <h6><i className="fab fa-facebook-square"></i> Facebook</h6>
                        </Link>
                        <Link className=" text-white">
                            <h6><i className="fab fa-instagram"></i>  instagram</h6>
                        </Link>
                        <h6 className="text-white"><i className="fab fa-linkedin-in"></i> Linkedin</h6>
                        <small className="text-white"><i className="fas fa-basketball-ball"></i> Web-site</small>
                    </div>
                </div>
            </div>
            <div className="container text-center mt-5 pt-5">
                <small className="m-0 text-white">Copyright <span className="text-danger">&copy;</span> Your Website 2021</small>
            </div>
        </footer>
    );
};

export default Footer;