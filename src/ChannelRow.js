import React from 'react'
import './ChannelRow.css'
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function ChannelRow({image,Channel,verified,subs,noOfVideo,description}) {
    return (
        <div className="channelRow">
           <Avatar className="channelRow__logo"
               alt={Channel} src={image}
           />
           <div className="channelRow__text">
            <h4>{Channel} {verified && <CheckCircleOutlineIcon 
               className="verifiedicon" 
            />}</h4>
            <p>{subs} Subscribers • {noOfVideo} videos</p>
            <p>{description}</p>
           </div>
            
        </div>
    )
}

export default ChannelRow
