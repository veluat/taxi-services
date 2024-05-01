import React from 'react';
import logo from './../../assets/img/title.png'
import {Menu} from "./menu/Menu";
import './Header.css';
import {NavLink, useLocation} from "react-router-dom";
import {BurgerMenu} from "./burger-menu/BurgerMenu";

export const Header = () => {
    const location = useLocation();

    const handleHomeClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({top: 0, behavior: 'smooth'});
        } else {
            window.location.href = '/';
        }
    };

    return (
        <header className={"wrapper"}>
            <div className={"logo"}>
                <img className={"img"} src={`${logo}`} alt="taxi services"/>
                <NavLink to={'/'} onClick={handleHomeClick}>Taxi services</NavLink>
            </div>
            <Menu/>
            <BurgerMenu/>
        </header>
    );
};