import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Header} from "./layout/header/Header";
import {Home} from "./layout/sections/home/Home";
import {Transportation} from "./layout/sections/services/service/transportation/Transportation";
import {Delivery} from "./layout/sections/services/service/delivery/Delivery";
import {Driver} from "./layout/sections/services/service/driver/Driver";
import {Battery} from "./layout/sections/services/service/battery/Battery";
import {ThankYou} from "./components/thankYou/ThankYou";
import {About} from "./layout/sections/about/About";
import {OrderNow} from "./layout/sections/order-now/OrderNow";
import {Footer} from "./layout/footer/Footer";
import {PrivacyPolicy} from "./components/privacy-policy/PrivacyPolicy";
import {CookieMessage} from "./components/cookie-message/CookieMessage";
import {CookiePolicy} from "./components/cookie-policy/CookiePolicy";

function App() {
    return (
        <div className="App">
            <div className="main-container">
                <BrowserRouter>
                    <Header/>
                    <CookieMessage/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/transportation" element={<Transportation/>}/>
                        <Route path="/delivery" element={<Delivery/>}/>
                        <Route path="/driver" element={<Driver/>}/>
                        <Route path="/battery" element={<Battery/>}/>
                        <Route path="/thank-you" element={<ThankYou/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/order-now" element={<OrderNow/>}/>
                        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                        <Route path="/cookie-policy" element={<CookiePolicy/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;