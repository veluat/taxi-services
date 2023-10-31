import React from 'react';
import {NavLink} from "react-router-dom";
import transport from "./../../../assets/img/customer-delivery.webp"
import delivery from "./../../../assets/img/transporting-a-cargo.webp"
import driver from "./../../../assets/img/taxi_driver.webp"
import battery from "./../../../assets/img/car-battery.webp"
import "./Services.css"

export const Services = () => {
    return (
        <section className="services-box">
            <h2 className="services-title">Our Services</h2>
            <div className="services-flex">
                <div className="service-container">
                    <img src={transport} alt="Transportatiton" className="service-image"/>
                    <div>
                        <h3>Transportation</h3>
                        <p>Welcome to our premier passenger transportation service, where we specialize in providing
                            exceptional travel experiences tailored to your needs. Whether you're a business
                            professional, a
                            leisure traveler, or a group on a special occasion, we are here to ensure that your journey
                            is
                            comfortable, convenient, and memorable...</p>
                    </div>
                    <NavLink to={'/transportation'}>Read more</NavLink>
                </div>
                <div className="service-container">
                    <img src={delivery} alt="Cargo delivery" className="service-image"/>
                    <div>
                        <h3>Cargo delivery</h3>
                        <p>Introducing our versatile taxi service, where we go beyond transporting passengers and offer
                            reliable cargo delivery solutions. Whether you need to transport documents, packages, or
                            larger items, our taxi service is equipped to handle all your cargo needs, with or without
                            passengers...</p>
                    </div>
                    <NavLink to={'/delivery'}>Read more</NavLink>
                </div>
                <div className="service-container">
                    <img src={driver} alt="Responsible Assistance" className="service-image"/>
                    <div>
                        <h3>Responsible Assistance</h3>
                        <p>Are you faced with a situation where a friend or loved one has had a few drinks and is in no
                            condition to drive? At our taxi service, we prioritize the safety and well-being of everyone
                            on the
                            road. We understand that responsible choices are essential, especially when it comes to
                            preventing
                            accidents caused by drunk driving....</p>
                    </div>
                    <NavLink to={'/driver'}>Read more</NavLink>
                </div>
                <div className="service-container">
                    <img src={battery} alt="Battery charge" className="service-image"/>
                    <div>
                        <h3>Battery charge</h3>
                        <p>Introducing our innovative taxi service that goes the extra mile to provide assistance when
                            you
                            find yourself stranded with a dead battery. We understand the frustration and inconvenience
                            of a
                            car that won't start, and that's why our taxi drivers are equipped to help jump-start your
                            vehicle using their own battery...</p>
                    </div>
                    <NavLink to={'/battery'}>Read more</NavLink>
                </div>
            </div>
        </section>
    )
}
