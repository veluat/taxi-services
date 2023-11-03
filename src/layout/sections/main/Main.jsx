import React from 'react';
import main from "../../../assets/img/main-taxi-services.webp";
import "./Main.css"

export const Main = () => {
    return (
        <div className="main-wrapper">
            <img className="main-image" src={main} alt="taxi services website"/>
            <div className="slogan">
                <h1 className="slogan-text">Taxi Services You Can Trust<br/>Making Your Journey More Comfortable
                </h1>
            </div>
        </div>
    );
};