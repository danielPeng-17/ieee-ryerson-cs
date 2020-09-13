import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header/header';
import Contact from '../components/Contact/contact';
import items from '../constants/eventsInfo';
import '../styles/eventDetails.css';

function EventDetails(props) {
    const history = useHistory();
    const temp = items.find(elem => elem.id === props.match.params.id);
    const data = temp != null ? temp : history.push({pathname: '/404'});
    
    return(
        <Fragment>
            {
                data != null ?
                <Fragment>
                    <Header 
                        header={data.eventTitle} 
                        height={65} 
                        backgroundImage={data.misc.images.header} 
                        backgroundPosition={'center'} 
                        brightness={70} 
                    />
                    <div className='content-wrapper'>
                        {
                            (data.misc.notes != null) ? 
                                Object.values(data.misc.notes).map(note => {
                                    return (
                                        <h2 className="note">
                                            {note}
                                        </h2>
                                    );
                                })
                            :
                                null
                        }
                        <div className="event-text-block">
                            {
                                Object.values(data.misc.texts).map((text) => {
                                    if (text.search('--video--') !== -1){
                                        return(
                                            <div>
                                                <video src={data.misc.video} type="video/mp4" controls />
                                            </div>
                                        );
                                    }
                                    
                                    if (text.search('{<a href=') !== -1 && text.search('</a>}') !== -1){
                                        let url = text.substring(text.search('{<a href=') + 10, text.search('\'>'));
                                        return (
                                            <p className='p-text'>
                                                {text.substring(0, text.search('{<a href='))}
                                                <a href={url} target="_blank" rel="noopener noreferrer" >{text.substring(text.search('\'>') + 2, text.search('</a>}'))}</a>
                                                {text.substring(text.search('</a>}') + 5)}
                                            </p>
                                        );
                                    }

                                    return (
                                        <p className='p-text'>
                                            {text}
                                        </p>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <Contact />
                </Fragment>
                :
                    null
            }
        </Fragment>
    );
}

export default EventDetails;