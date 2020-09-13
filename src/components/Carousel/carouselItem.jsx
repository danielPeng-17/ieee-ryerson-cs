import React from 'react';
import { useHistory } from 'react-router-dom';
import './carousel.css';

function CarouselItem(props){
    const misc = (props.misc != null) ? props.misc : null;
    const history = useHistory();

    const handleClick = () => {
        if (misc){
            if (misc.pdf != null){
                window.open(misc.pdf, '_blank');
            }else if (misc.images != null && misc.texts != null){
                history.push({
                    // pathname: '/event-details/:event_id'
                    pathname: '/event-details/' + props.id,
                });
            }
        }
    }

    return (
        <div className="event" onClick={handleClick}>
            <span className='current-tag' style={{display: (props.time.current || props.time.upcoming) ? 'block' : 'none'}} >{(props.time.current) ? 'Current' : 'Upcoming'}</span>
            <span className='collab-tag' style={{display: (props.collab) ? 'block' : 'none'}} >Collaboration</span>
            <img className="eventImg" src={props.eventImg} alt="event" />
            <h5 className="event-title">{props.eventTitle}</h5>
            <p className="event-time">{props.eventStartDate} <span style={{display: (props.eventEndDate === 'null') ? 'none' : 'contents'}}>- {props.eventEndDate}</span></p>
            <p className="details-tag">Click to see details</p>
        </div>
    );
}

export default CarouselItem;