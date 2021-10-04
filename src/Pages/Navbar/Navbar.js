import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import Logo from './img/Logo.png'

const Navbar = () => {
    return (
        <Nav className="navbar navbar-expand-lg navbar-dark navbar-style-bg sticky-top">
            <div className="container px-5">
                <Link className="navbar-brand" to="/home"><img className="Logo" src={Logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item p-2">
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} activeStyle={{ color: 'red', fontWeight: 'bold' }} aria-current="page" to="/home">Home</NavLink>
                        </li>

                        <li className="nav-item p-2">
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} activeStyle={{ color: 'red', fontWeight: 'bold' }} to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item p-2">
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} activeStyle={{ color: 'red', fontWeight: 'bold' }} to="/about">About</NavLink>
                        </li>
                        <li className="nav-item p-2">
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} activeStyle={{ color: 'red', fontWeight: 'bold' }} to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </Nav>
    );
};

export default Navbar;