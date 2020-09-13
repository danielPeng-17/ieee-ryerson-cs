import React, { Component, Fragment } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import CarouselItem from './carouselItem';
import '../../styles/index.css';
import isEventCurrent from '../../helpers/date';
import items from '../../constants/eventsInfo';
import './carousel.css';

gsap.registerPlugin(Draggable);

export default class Carousel extends Component{
    constructor(props){
        super(props);

        this.rowRef = React.createRef();
        this.draggable = null;

        this.state = {
            // eventsCarouselLength: null,
            oneCarouselUnit: 370,
            overflow: null,
            showArrows: window.innerWidth > 575
        };

        this.items = items;
    }

    componentDidMount(){
        const tempCol = this.rowRef.current.getElementsByClassName('event');

        this.setState({
            // eventsCarouselLength: this.rowRef.current.offsetWidth,
            oneCarouselUnit: tempCol[0].offsetWidth,
            overflow: this.setOverflow(),
            showArrows: window.innerWidth > 575
        });

        this.setDraggable();
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({
            // eventsCarouselLength: this.rowRef.current.getBoundingClientRect().width,
            oneCarouselUnit: document.getElementsByClassName('event')[0].clientWidth,
            overflow: this.setOverflow(),
            showArrows: window.innerWidth > 575
        });
        
       this.setDraggable();
    }

    setOverflow = () => {
        let element = this.rowRef.current.getElementsByClassName('event');
        if (element.length * element[0].clientWidth < window.innerWidth * .94){
            return false;
        }
        return true;
    }

    setDraggable = () => {
        this.draggable = Draggable.create(this.rowRef.current, {
            type: "x",
            bounds: {
                maxX: -this.rowRef.current.clientWidth + window.innerWidth * 0.93,
                minX: 0,
            }
        });
        
        for (let i = 0; i < this.draggable.length; i++){
            if (!this.setOverflow()){
                this.draggable[i].disable();
            }else {
                this.draggable[i].enable();
            }
        }
        
    }

    render(){
        return(
            <Fragment>
                <img className="arrow right-arrow" src={require("../../assets/icons/back single arrow.svg")} style={{display: (!this.state.overflow || !this.state.showArrows) ? 'none' : 'block'}} alt="carousel right arrow hint" />
                <div className="row" ref={this.rowRef} style={{margin: (!this.state.overflow) ? '0 auto' : '0 3%'}} >
                    {
                        this.items.map((item) => {
                            return( 
                                <CarouselItem 
                                    id={item.id}
                                    eventImg={item.eventImg} 
                                    eventTitle={item.eventTitle} 
                                    eventStartDate={item.eventStartDate} 
                                    eventEndDate={item.eventEndDate} 
                                    time={isEventCurrent(item.eventStartDate, item.eventEndDate)} 
                                    collab={item.collab} 
                                    misc={item.misc} 
                                />
                            );
                        })
                    }
                </div>
                <img className="arrow left-arrow" src={require("../../assets/icons/next single arrow.svg")} style={{display: (!this.state.overflow || !this.state.showArrows) ? 'none' : 'block'}} alt="carousel left arrow hint" /> 
            </Fragment>
        );
    }
}