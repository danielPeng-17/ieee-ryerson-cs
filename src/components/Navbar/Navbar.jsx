import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {   
    constructor(props) {
        super(props);

        this.state = {
            scroll: 0,
            toggle: false,
            windowWidth: window.innerWidth,
        };
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount(){
        document.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }

    handleScroll = () => {
        if (window.innerWidth > 992){
            this.setState({
                scroll: window.pageYOffset
            });
        }
    }

    handleResize = () => {
        this.setState({
            windowWidth: window.innerWidth
        });
    }

    handleSidebar = (id) => {
        if (window.innerWidth <= 992){
            this.setState({
                toggle: !this.state.toggle
            });

            if (id != null && document.getElementById(id) !== null){
                let yPos = document.getElementById(id).getBoundingClientRect().top;
            
                window.scrollTo({
                    top: window.scrollY + yPos,
                    behavior: 'smooth'
                });
            }
        }
    }

    render(){
        return (
            <nav className="nav">
                <div className="navbar-container" style={{backgroundColor: (this.state.windowWidth > 992 && this.state.scroll > 50) ? '#004C9B' : 'rgba(0,0,0,0.001)'}}>
                    <div className="navbar-logo">
                        <Link to={process.env.PUBLIC_URL + "/"} className="logo-btn" onClick={() => { if (window.location.href.slice(-1) !== '/') {this.forceUpdate()} }} ><img src={require("../../assets/logo/rcic_white.png")} alt="ryerson ieee logo" className="ryerson-ieee-logo" /></Link>
                    </div>
                    <ul className="navLinks">
                        {
                            (window.location.href.slice(-1) === '/') ? 
                                // home page will show these options
                                <Fragment>
                                    {/* eslint-disable-next-line */}
                                    <a className='navbar-link' onClick={() => {this.props.handleNavbarScrollOffset('aboutUs')}} >About</a>
                                    {/* eslint-disable-next-line */}
                                    <a className='navbar-link' onClick={() => {this.props.handleNavbarScrollOffset('events')}} >Events</a>
                                    {/* eslint-disable-next-line */}
                                    <a className='navbar-link' onClick={() => {this.props.handleNavbarScrollOffset('sponsors')}} >Sponsors</a>
                                    {/* eslint-disable-next-line */}
                                    <a className='navbar-link' onClick={() => {this.props.handleNavbarScrollOffset('contact')}} >Contact</a>
                                </Fragment> 
                            :
                                // any other pages that is not home will show thses options 
                                <Fragment>
                                    <Link to={process.env.PUBLIC_URL + "/"} className='navbar-link' onClick={() => {this.forceUpdate()}} >Home</Link>
                                    {/* eslint-disable-next-line */}
                                    <a className='navbar-link' onClick={() => {this.props.handleNavbarScrollOffset('contact')}} >Contact</a>
                                </Fragment>
                        }
                    </ul>
                    <span className={'sidebar ' + (this.state.toggle ? 'active' : '')}>
                        <button className="sidebar-toggle-btn btn-back" onClick={this.handleSidebar} aria-label="toggle menu">
                            <div className='burger-btn top-burger'></div>
                            <div className='burger-btn middle-burger'></div>
                            <div className='burger-btn bottom-burger'></div>
                        </button>
                        <div className={"sidebar-menu " + (this.state.toggle ? "show-sidebar-items" : "hide-sidebar-items")}>
                            <ul>
                                {
                                    (window.location.href.slice(-1) === '/') ?
                                        <Fragment>
                                            {/* eslint-disable-next-line */}
                                            <li><a onClick={() => {this.handleSidebar('top')}} style={{marginTop: "3.5%"}} >Home</a></li>
                                            {/* eslint-disable-next-line */}
                                            <li><a onClick={() => {this.handleSidebar('aboutUs')}}>About</a></li>
                                            {/* eslint-disable-next-line */}
                                            <li><a onClick={() => {this.handleSidebar('events')}}>Events</a></li>
                                            {/* eslint-disable-next-line */}
                                            <li><a onClick={() => {this.handleSidebar('sponsors')}}>Sponsors</a></li>
                                            {/* eslint-disable-next-line */}
                                            <li><a onClick={() => {this.handleSidebar('contact')}}>Contact</a></li>
                                        </Fragment>
                                    :
                                        <Fragment>
                                            <li><Link to={process.env.PUBLIC_URL + "/"} onClick={()=>{this.setState({toggle: !this.state.toggle})}} style={{marginTop: "3.5%"}} >Home</Link></li>
                                            {/* eslint-disable-next-line */}
                                            <li><a onClick={() => {this.handleSidebar('contact')}}>Contact</a></li>
                                        </Fragment>
                                }
                            </ul>
                        </div>
                    </span>
                </div>
            </nav>
        );
    }
}
