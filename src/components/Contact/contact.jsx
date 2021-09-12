import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../../globalStyles/globalStyles.css';
import './contact.css';

export default class Contact extends Component{
    constructor(props){
        super(props);

        this.state = {
            success: false,
            topOffset: (window.innerWidth > 992) ? '100px' : '2.5%',
            width: (window.innerWidth > 992) ? '60%' : '90%',
            // leftOffset: 'calc( (100% - ' + this.state.width + ') / 2)'
        }
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({
            topOffset: (window.innerWidth > 992) ? '100px' : '2.5%',
            width: (window.innerWidth > 992) ? '60%' : '90%',
        });
    }

    copyText = (e) => {
        try {
            var textArea = document.createElement('textarea');
            textArea.innerText = 'ieeeryersoncic@gmail.com';
            document.body.appendChild(textArea);
            textArea.select();
            const success = document.execCommand('copy');
            if (success){
                textArea.remove();
                this.setState({success: true});

                setTimeout(() => {    
                    this.setState({success: false});
                }, 1500);
            }
        } catch(e){
            console.log(e);
        }
    }

    render(){
        return (
            <div id="contact">
                <div className="copied" style={{display: (this.state.success) ? 'block' : 'none', top: (this.state.success) ? this.state.topOffset : '0', width: (this.state.success) ? this.state.width : '0', left: (this.state.success) ? 'calc( (100% - ' + this.state.width + ') / 2)' : '0'}} >
                    Email Copied!
                </div>
                <div className="container">
                    <h2 className="heading" style={{color: "white", textAlign: 'center'}}>Contact Us!</h2>
                    <p style={{textAlign: 'center'}}>
                        Have a question? Send us an email or connect with us on social media!
                    </p>
                    
                    <div className='icon-wrapper'>
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faPaperPlane} className='contact-icon' onClick={this.copyText} title='Copy Email' />
                        </div>

                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faInstagram} className='contact-icon' title='Instagram' onClick={() => { window.open('https://www.instagram.com/ieee_ryersoncic/?hl=en', '_blank'); }} />
                        </div>
                    </div>
                </div>

                <p className="copyright">© 2021 Ryerson Computational Intelligence Chapter</p>
            </div>
        );
    }
}