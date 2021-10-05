import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import Img from './img/490-4905098_programming-illustration-images-png-transparent-png-removebg-preview.png'

const Header = () => {
    return (
        <div>
            {/* Header page  */}

            <header className=" py-5 hero-style ">
                <div className=" d-lg-flex container justify-content-around ">
                    <Col className=" justify-content-center">
                        <div>

                            {/* header content */}
                            <div className=" container">
                                <h1 className=" fw-bolder text-white mb-2">Programing Education Academy</h1>
                                <p className="lead text-white-50 mb-4">Programming is a skill that comes with numerous benefits. Some of the advantages that come with knowing code are a guaranteed job, getting to create interesting applications, developing problem-solving skills, and sometimes even the opportunity to work from home.</p>

                                {/* header button */}
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                    <a className="btn btn-primary btn-lg px-4  btn-outline-warning text-white me-sm-3" href="#home-service">Get Service</a>
                                    <Link className="btn btn-outline-light btn-lg px-4" to="/services">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/* header banner */}
                    <Col>
                        <img className="img-fluid" src={Img} alt="" />
                    </Col>
                </div>

            </header>
        </div>
    );
};

export default Header;