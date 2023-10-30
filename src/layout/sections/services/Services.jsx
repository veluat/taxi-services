import React from 'react';
import {Transportation} from "./service/transportation/Transportation";
import {Delivery} from "./service/delivery/Delivery";
import {Driver} from "./service/driver/Driver";
import {Battery} from "./service/battery/Battery";

export const Services = () => {
    return (
        <section>
            <div className="services-container">
                <div><Transportation more={true} small={true}/>
                </div>
                <div><Delivery more={true} small={true}/>
                </div>
                <div><Driver more={true} small={true}/>
                </div>
                <div><Battery more={true} small={true}/>
                </div>
            </div>
        </section>
    );
};
