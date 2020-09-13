import React, { Fragment, Component } from 'react';
// components
import Header from '../components/Header/header';
import Members from '../components/Members/members';
import Contact from '../components/Contact/contact';
// styles
import '../styles/team.css'

export default class Team extends Component{
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render(){
        return(
            <Fragment>
                <Header 
                    header={'Meet the Team!'} 
                    height={65} 
                    backgroundImage={require('../assets/images/ryerson-slc-day.jpg')} 
                    backgroundPosition={'center'} 
                    brightness={80} 
                />
                <Members />
                <Contact />
            </Fragment>
        );
    }
    
}