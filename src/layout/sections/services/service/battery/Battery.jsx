import React from 'react';
import battery from "../../../../../assets/img/car-battery.webp";
import './Battery.css';

export const Battery = () => {
    return (
        <section className="battery-wrapper">
            <h2 className="battery-title">Battery charge</h2>
        <div className="battery">
            <img src={battery} alt="battery charge" className={"battery-image"}/>
            <div className="battery-text">
                <p>
                    Introducing our innovative taxi service that goes the extra mile to provide assistance when you
                    find yourself stranded with a dead battery. We understand the frustration and inconvenience of a
                    car that won't start, and that's why our taxi drivers are equipped to help jump-start your
                    vehicle using their own battery.
                    <br/>
                    <br/>
                    Imagine this scenario: you're in a hurry, ready to embark on your day's journey, only to
                    discover that your car won't start due to a drained battery. Instead of feeling helpless and
                    overwhelmed, simply give our taxi service a call, and we'll dispatch a driver to your location
                    promptly.
                    <br/>
                    <br/>
                    Our skilled and knowledgeable taxi drivers have the necessary tools and expertise to jump-start
                    your vehicle safely and efficiently. They will arrive with a fully charged battery, ready to
                    assist you in getting your car up and running again. With their experience and know-how, they
                    will quickly assess the situation, connect the batteries correctly, and provide the necessary
                    boost to start your engine.
                    <br/>
                    <br/>
                    Not only will our drivers help you start your car, but they will also offer friendly and
                    courteous service throughout the process. They understand the stress and inconvenience that
                    comes with a dead battery, and they are committed to providing you with the support you need to
                    continue your journey smoothly.
                    <br/>
                    <br/>
                    Our aim is to provide a comprehensive taxi service that goes beyond transportation. We want to
                    be there for you in those unexpected moments of car trouble, offering a helping hand when you
                    need it most. With our jump-start assistance, you can rely on us to get you back on the road and
                    on with your day.
                    <br/>
                    <br/>
                    Please note that while our jump-start service is designed to help you in situations where your
                    car battery has died, there may be cases where additional assistance is required. If our drivers
                    determine that the issue is beyond a simple jump-start, they will guide you on the best course
                    of action and, if needed, help arrange for a towing service or recommend a trusted mechanic.
                    <br/>
                    <br/>
                    Don't let a dead battery derail your plans. Call our taxi service for reliable jump-start
                    assistance and experience the convenience and peace of mind knowing that help is just a phone
                    call away. Let us be your dependable partner in getting your car back to life and you back on
                    the road.
                </p>
            </div>
        </div>
        </section>
    );
};

