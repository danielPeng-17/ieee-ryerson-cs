import React from 'react';

import './sponsors.css';

export default function Sponsors(){
    return (
        <div id="sponsors">
            <h2 className="heading">Our Sponsors</h2>

            <div className="row-container">
                <div className="col-container">
                    <a className="sponsor-btn ieee-sponsor" href="https://www.ieeetoronto.ca/" title="IEEE Toronto" target="_blank" rel="noopener noreferrer" aria-hidden="true"> </a>
                    <a className="sponsor-btn wie-sponsor" href="https://wie.ieee.org/" title="IEEE Women in Engineering" target="_blank" rel="noopener noreferrer" aria-hidden="true"> </a>
                </div>
            </div>
        </div>
    );
}