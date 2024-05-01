import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {SvgSelector} from '../../../components/svgSelector/svgSelector';
import './Menu.css';
import {ServiceContext} from "../../../App";

export const Menu = () => {
    const navigate = useNavigate();
    const { selectedService, setSelectedService } = React.useContext(ServiceContext)
    const handleServiceChange = (e) => {
        setSelectedService(e.target.value);
        window.scrollTo(0, 0)
    };

    useEffect(() => {
        if (selectedService === 'transportation') {
            navigate('/transportation');
        } else if (selectedService === 'delivery') {
            navigate('/delivery');
        } else if (selectedService === 'driver') {
            navigate('/driver');
        } else if (selectedService === 'battery') {
            navigate('/battery');
        }
        window.scrollTo(0, 0);
    }, [selectedService, navigate]);

    const handleNavLinkClick = () => {
        window.scrollTo(0, 0)
    };

    const handleNavClick = () => {
        setSelectedService('');
        window.scrollTo(0, 0);
    }

    return (
        <nav className="menu-nav">
            <ul className="list">
                <li>
                    <SvgSelector svgName={'home'}/>
                    <NavLink to={'/'} className="padding" onClick={handleNavLinkClick}>
                        Home
                    </NavLink>
                </li>
                <li className={'services'}>
                    <SvgSelector svgName={'services'}/>
                    <select value={selectedService} onChange={handleServiceChange} className="padding">
                        <option value="">Select a service</option>
                        <option value="transportation">Transportation</option>
                        <option value="delivery">Cargo delivery</option>
                        <option value="driver">Assistance</option>
                        <option value="battery">Battery charging</option>
                    </select>
                </li>
                <li>
                    <SvgSelector svgName={'order-now'}/>
                    <NavLink to={'/order-now'} className="padding" onClick={handleNavClick}>
                        Order now
                    </NavLink>
                </li>
                <li>
                    <SvgSelector svgName={'about'}/>
                    <NavLink to={'/about'} className="padding" onClick={handleNavClick}>
                        About Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};