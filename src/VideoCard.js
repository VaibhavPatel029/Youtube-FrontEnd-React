import { Avatar } from '@material-ui/core'
import React from 'react'
import './VideoCard.css'

function Video({image, titel, channel, views, timestamp, channelImage}) {
    return (
        <div className="videoCard">
             <img className="videoCard__thumbnail" src={image} alt=""/>
             <div className="video__info">
                <Avatar 
                className="videoCard__avatar" 
                alt={channel} 
                src={channelImage}
                />
                <div className="videoCard__text">
                    <h4>{titel}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
             </div>

        </div>
    )
}

export default Video
