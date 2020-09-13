import React, { Component, Fragment } from 'react';
import Member from './member';
import membersList from '../../constants/membersInfo'
import './members.css';

export default class Members extends Component{
    constructor(props){
        super(props);

        this.membersList = membersList;
    }
    render(){
        return (
            <Fragment>
                <div className='members-wrapper'>
                    {
                        this.membersList.map((member, index) => {
                            return (
                                <Member key={index} profile={member.profile} name={member.name} position={member.position} />
                            );
                        })
                    }
                </div>
            </Fragment>
        );
    }
}