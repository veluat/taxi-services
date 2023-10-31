import React from 'react';
import home from "../../../assets/img/main-taxi-services.webp";
import {OrderNow} from "../order-now/OrderNow";
import {About} from "../about/About";
import './Home.css';
import {Services} from "../services/Services";

export const Home = () => {
    return (
        <div className="home-box">
            <div className="home-image-container">
                <img src={home} alt="taxi services website" className="home-image"/>
                <div className="slogan">
                    <h1 className="slogan-text">Taxi Services You Can Trust<br/>Making Your Journey More Comfortable
                    </h1>
                </div>
            </div>
            <div className="home-content">
                <Services/>
                <About/>
                <OrderNow/>
            </div>
        </div>
    );
};