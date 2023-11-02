import React, {useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import './BurgerMenu.css';
import logo from "../../../assets/img/title.png";

export const BurgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();

    const onClickHandler = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleNavLinkClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="burger-nav">
            <button onClick={onClickHandler} className={`burger-icon ${isMenuOpen ? 'x' : ''}`}>
                <span></span>
            </button>
            {isMenuOpen && (<div className={"burger-menu-popup"}>
                <img className={"img"} src={logo} alt="taxi services"/>
                <ul>
                    <li>
                        <NavLink to={'/'} className="burger-menu-padding" onClick={handleNavLinkClick}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/transportation'} className="burger-menu-padding" onClick={handleNavLinkClick}>
                            Transportation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/delivery'} className="burger-menu-padding" onClick={handleNavLinkClick}>
                            Cargo delivery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/driver'} className="burger-menu-padding" onClick={handleNavLinkClick}>
                            Assistance
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/battery'} className="burger-menu-padding" onClick={handleNavLinkClick}>
                            Battery charging
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/order-now'} className="burger-menu-padding" onClick={handleNavLinkClick}>
                            Order now
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'} className="burger-menu-padding" onClick={handleNavLinkClick}>
                            About Us
                        </NavLink>
                    </li>
                </ul>
            </div>)}

        </nav>
    );
};