import React from 'react';
import { Link } from 'react-router-dom';
import './pageNotFound.css';

function PageNotFound(){
    return (
        <div className="screen">
            <div className="screen-wraper">
                <p className="error-code">ERROR CODE 404</p>
                <p className="normal">We can't find the page you're looking for.</p>
                <Link to='/' className='home-btn'>Go To Homepage</Link>
            </div>
        </div>
    );
}

export default PageNotFound;