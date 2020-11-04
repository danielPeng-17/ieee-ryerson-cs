import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../globalStyles/globalStyles.css';
import './aboutUs.css';


export default class AboutUs extends Component{

    render(){
        return(
            <Fragment>
                <div id="aboutUs">
                    <h2 className="heading">About IEEE Ryerson Computational Intelligence Chapter</h2>
                    <div className="container">
                        <p style={{marginTop: '7%'}}>
                            IEEE is the world’s largest technical professional organization dedicated to 
                            advancing technology for the benefit of humanity. The IEEE Ryerson Computational 
                            Intelligence Chapter (CIC) aims to provide students with hands-on opportunities to 
                            explore potential career pathways in Computer Science and enhance students’ 
                            practical knowledge and skills with industry experts.  
                        </p>
                        
                        <hr className="aboutUsDivider" />
                        <div className="bottom-aboutUs">
                            <p>Learn more about the Ryerson IEEE Computational Intelligence Team!</p>
                            <Link to={process.env.PUBLIC_URL + '/team'} className="dark-btn" aria-label="Meet Our Team">Meet Our Team</Link>
                            <p>Vist IEEE's official website to learn more about them.</p>
                            <a className="dark-btn" href='https://www.ieee.org/' rel="noopener noreferrer" target='_blank' aria-label="Visit ieee website">Visit ieee.org</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}