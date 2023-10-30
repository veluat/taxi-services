import React from 'react';
import logo from './../../assets/img/title.png'
import {Menu} from "./menu/Menu";
import './Header.css';

export const Header = () => {
    return (
        <header className={"wrapper"}>
            <div className={"logo"}>
                <img className={"img"} src={logo} alt="taxi services"/>
                <span>Taxi services</span>
            </div>
                <Menu/>
        </header>
);
};