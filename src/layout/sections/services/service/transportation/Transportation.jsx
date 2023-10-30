import React from 'react';
import transportation from "../../../../../assets/img/customer-delivery.webp";
import './Transportation.css';
import {NavLink} from "react-router-dom";

export const Transportation = ({more, small}) => {
    const finalyImg = small ? "transportation-image transportation-small" : "transportation-image"

    return (
        <div className="transportation">
            <img src={transportation} alt="transportation of passengers" className={finalyImg}/>
            <div className="transportation-text">
                <h2>Transportation</h2>
                {more ?
                    <div>
                        Welcome to our premier passenger transportation service, where we specialize in providing
                        exceptional travel experiences tailored to your needs. Whether you're a business professional, a
                        leisure traveler, or a group on a special occasion, we are here to ensure that your journey is
                        comfortable, convenient, and memorable
                        <NavLink to={'/transportation'}>...more</NavLink>
                    </div>
                    : <p>
                        Welcome to our premier passenger transportation service, where we specialize in providing
                        exceptional travel experiences tailored to your needs. Whether you're a business professional, a
                        leisure traveler, or a group on a special occasion, we are here to ensure that your journey is
                        comfortable, convenient, and memorable.
                        <br/>
                        <br/>
                        Our passenger transportation service offers a wide range of options to suit your specific
                        requirements.
                        From luxurious sedans for individual travelers to spacious vans for larger groups, we have a
                        diverse fleet of well-maintained vehicles to accommodate any number of passengers. With our
                        modern amenities, including comfortable seating, climate control, and entertainment systems, we
                        strive to make your journey as enjoyable as possible.
                        <br/>
                        <br/>
                        Punctuality is at the core of our service. We understand the importance of being on time,
                        whether
                        it's for a flight, a business meeting, or a social event. Our experienced and professional
                        drivers are meticulously trained to navigate through traffic and choose the most efficient
                        routes, ensuring that you arrive at your destination promptly. Sit back, relax, and let us take
                        care of the logistics, so you can focus on what truly matters to you.
                        <br/>
                        <br/>
                        Safety is our utmost priority. All our vehicles undergo regular maintenance and are equipped
                        with
                        advanced safety features to provide you with a secure travel experience. Our drivers are
                        licensed,
                        insured, and dedicated to following the highest safety standards. You can have peace of mind
                        knowing
                        that you are in capable hands as we transport you to your destination.
                        <br/>
                        <br/>
                        Booking our passenger transportation service is seamless and convenient. With our user-friendly
                        online
                        platform or a quick call to our friendly customer service team, you can easily make a
                        reservation
                        that
                        suits your schedule. We offer flexible pick-up and drop-off options, accommodating your specific
                        needs
                        and ensuring a hassle-free experience from start to finish.
                        <br/>
                        <br/>
                        At our passenger transportation service, we believe that exceptional customer service is the key
                        to
                        a
                        truly memorable journey. Our drivers are not only skilled professionals but also friendly and
                        courteous
                        individuals who are committed to providing you with the highest level of hospitality. From
                        assisting
                        you
                        with your luggage to offering insider tips and recommendations, we go the extra mile to make
                        your
                        travel
                        experience extraordinary.
                        <br/>
                        <br/>
                        Experience the difference with our passenger transportation service. Whether you're traveling
                        for
                        business, leisure, or a special occasion, we are dedicated to delivering a seamless and
                        enjoyable
                        journey. Let us be your trusted travel partner, ensuring that you reach your destination in
                        comfort,
                        style, and with a smile. Sit back, relax, and let us transport you to your next adventure.
                    </p>}
            </div>
        </div>
    );
};