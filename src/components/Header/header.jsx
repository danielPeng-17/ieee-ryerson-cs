import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
// import "../../styles/index.css";
import "./header.css";

export default class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            loaded: false
        }
    }

    componentDidMount(){
        this.setState({loaded: true});
    }

    componentWillUnmount(){
        this.setState({loaded: false});
    }

    render(){
        return(
            <Fragment>
                <CSSTransition in={this.state.loaded} timeout={1000} classNames="fade" >
                    <div style={{position: 'relative'}}>
                        <div className="header" id="top" 
                            style={{height: (this.props.height)+'vh', backgroundImage: 'url('+(this.props.backgroundImage)+')', backgroundPosition: (this.props.backgroundPosition) , filter: `brightness(${this.props.brightness}%)`}} 
                        />
                        {
                            (this.props.title) ? 
                                <div className="title">
                                    <h1 className="big-heading">{this.props.title.bigHeading}</h1>
                                    <h5 className="small-heading">{this.props.title.smallHeading}</h5>
                                </div>
                            :
                                <div className="title header-text-wrapper">
                                    <h2 className="header-text">{this.props.header}</h2>
                                </div>
                        }
                        
                    </div>
                </CSSTransition>
            </Fragment>
        );
    }
}