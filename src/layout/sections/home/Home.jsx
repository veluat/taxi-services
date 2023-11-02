import React from 'react';
import {OrderNow} from "../order-now/OrderNow";
import {About} from "../about/About";
import './Home.css';
import {Services} from "../services/Services";
import {Main} from "../main/Main";

export const Home = () => {
    return (
        <div className="home-box">
            <Main/>
            <Services/>
            <About/>
            <OrderNow/>
        </div>
    );
};