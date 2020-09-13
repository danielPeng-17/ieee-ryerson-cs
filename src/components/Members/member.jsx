import React, { Component } from 'react';
import './members.css';

export default class Member extends Component{
    render(){
        return(
            <div className='member-box'>
                <img className='profile' src={this.props.profile} alt='member profile' />
                <h3 className='name'>{this.props.name}</h3>
                <h4 className='position'>{this.props.position}</h4>
            </div>
        );
    }
}