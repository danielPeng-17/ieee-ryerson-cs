import React, { Component } from 'react';
import Carousel from '../Carousel/carousel';

import './events.css';

export default class Events extends Component{

    render(){
        return(
            <div id="events">
                <h2 className="heading">Our Events</h2>
                <Carousel></Carousel>
            </div>
        );
    }
}