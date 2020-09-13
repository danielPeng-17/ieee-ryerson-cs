import React, { Fragment, Component } from 'react';
// components 
import Header from '../components/Header/header';
import AboutUs from '../components/AboutUs/aboutUs';
import Parallax from '../components/Parallax/parallax';
import Events from '../components/Events/events';
import Sponsors from '../components/Sponsors/sponsors';
import Contact from '../components/Contact/contact';
// styles
// import '../styles/index.css';

export default class Index extends Component{
    componentDidMount(){
        window.scrollTo(0,0)
    }

    render(){
        return(
            <Fragment>
                <Header 
                    title={{
                        bigHeading: 'IEEE', 
                        smallHeading: 'Ryerson Computational Intelligence Chapter'
                    }}
                    height={92} 
                    backgroundImage={require('../assets/images/ryerson-slc-night.jpg')} 
                    backgroundPosition={'bottom'} 
                    brightness={85} 
                />
                <AboutUs />
                <Parallax />
                <Events />
                <Sponsors />
                <Contact />         
            </Fragment>
        );
    }
}