import React, {useEffect, useState} from 'react';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {SvgSelector} from '../../../components/svgSelector/svgSelector';
import './Menu.css';

export const Menu = () => {
    const [selectedService, setSelectedService] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleServiceChange = (e) => {
        setSelectedService(e.target.value);
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
    }, [selectedService, navigate]);

    const handleNavLinkClick = () => {
        setSelectedService('');
        if (location.pathname === '/') {
            window.scrollTo({top: 0, behavior: 'smooth'});
        } else {
            window.location.href = '/';
        }
    };


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
                    <NavLink to={'/order-now'} className="padding" onClick={handleNavLinkClick}>
                        Order now
                    </NavLink>
                </li>
                <li>
                    <SvgSelector svgName={'about'}/>
                    <NavLink to={'/about'} className="padding" onClick={handleNavLinkClick}>
                        About Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};