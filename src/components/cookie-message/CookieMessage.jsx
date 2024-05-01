import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import './CookieMessage.css';

export const CookieMessage = () => {
    const [acceptedCookies, setAcceptedCookies] = useState(localStorage.getItem('acceptedCookies') === 'true');

    const handleAcceptCookies = () => {
        setAcceptedCookies(true);
        localStorage.setItem('acceptedCookies', 'true');
    };

    const handleRejectCookies = () => {
        setAcceptedCookies(true);
        localStorage.setItem('acceptedCookies', 'true');
    };

    if (acceptedCookies) {
        return null;
    }

    return (
        <div className="cookie-alert">
            <p>
                This website uses cookies to improve your experience.
                <br/>
                By continuing to use this site, you consent to the use of <NavLink
                to={'/cookie-policy'} onClick={() => window.scrollTo(0, 0)}>cookies</NavLink>.
            </p>
            <div className="cookie-btn-box">
                <button onClick={handleAcceptCookies}>Accept</button>
                <button onClick={handleRejectCookies}>Reject</button>
            </div>
        </div>
    );
};