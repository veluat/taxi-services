import React from 'react';
import driver from '../../../../../assets/img/taxi_driver.webp';
import './Driver.css';

export const Driver = () => {

    return (
        <section className="driver-wrapper">
            <h2 className="driver-title">Responsible Assistance</h2>
        <div className="driver">
            <img src={driver} alt="drunk driver" className={"driver-image"}/>
            <div className="driver-text">
                <p>
                    <h3 style={{fontSize: "24px", textAlign: "center", margin: "0"}}>Helping a Friend in Need</h3>
                    <br/>
                    <br/>
                    Are you faced with a situation where a friend or loved one has had a few drinks and is in no
                    condition to drive? At our taxi service, we prioritize the safety and well-being of everyone on the
                    road. We understand that responsible choices are essential, especially when it comes to preventing
                    accidents caused by drunk driving. That's why we offer a unique service designed to help those who
                    find themselves in such situations.
                    <br/>
                    <br/>
                    Introducing our Responsible Assistance program: giving you peace of mind and providing a safe
                    solution when you or someone you know is unable to drive due to alcohol consumption. Our dedicated
                    team of professional taxi drivers is ready to step in and help.
                    <br/>
                    <br/>
                    Here's how it works: if you or your friend realize that driving under the influence is not an
                    option, give us a call. Our dispatchers are available 24/7, ready to listen and assist you. We will
                    dispatch a taxi driver to your location promptly. Unlike traditional taxi services, our approach
                    goes beyond simply taking you to your destination. Our responsible taxi driver will bring their
                    vehicle to your location and ensure that both you and your car arrive home safely.
                    <br/>
                    <br/>
                    Our drivers are trained to handle these delicate situations with empathy and understanding. They
                    will treat you and your friend with the utmost respect and professionalism, making sure you feel
                    comfortable throughout the journey. Your safety is their top priority, and they will ensure a smooth
                    and secure ride back home.
                    <br/>
                    <br/>
                    We understand that accidents happen, and sometimes we make poor choices. However, it's crucial to
                    address these situations responsibly. By utilizing our Responsible Assistance program, you not only
                    prevent potential harm to yourself and others but also demonstrate your commitment to making safer
                    choices.
                    <br/>
                    <br/>
                    Please remember that it's always better to be safe than sorry. If you or someone you know has had
                    too much to drink, do not hesitate to contact our taxi service. We are here to help you make the
                    responsible choice and ensure a secure journey home.
                    <br/>
                    <br/>
                    Together, let's promote a culture of responsible decision-making and prioritize the safety of
                    everyone on the road. Trust our taxi service to be your reliable partner when it matters the most.
                    Give us a call and let us assist you in getting you and your vehicle home safely.
                </p>
            </div>
        </div>
        </section>
    );
};

