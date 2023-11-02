import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import './Footer.css';
import logo from "../../assets/img/title.png";

export const Footer = () => {
    const location = useLocation();

    const handleHomeClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({top: 0, behavior: 'smooth'});
        } else {
            window.location.href = '/';
        }
    };

    return (
        <div className="container-footer">
            <footer className="footer">
                <div className="logo-footer">
                    <img className="img" src={logo} alt="taxi services"/>
                    <NavLink to={'/'} onClick={handleHomeClick}>
                        Taxi services
                    </NavLink>
                </div>
                <div className="footer-links">
                    <NavLink to={'/'} onClick={handleHomeClick}>Home</NavLink>
                    <NavLink to={'/about'}>About Us</NavLink>
                    <NavLink to={'/privacy-policy'}>Privacy policy</NavLink>
                </div>
                <div className="contact-info">
                     <a href="https://maps.google.com/maps?q=13, north laos, Phou Khoun, Laos">Our location<p>13, north
                        laos, Phou Khoun, Laos</p></a>
                    <a href="tel:+856 20 22 006 626">Phone<p>+856 20 22 006 626</p></a>
                    <a href="mailto:support@domain.do">Email<p>support@domain.com</p></a>
                </div>
            </footer>
        </div>
    );
};