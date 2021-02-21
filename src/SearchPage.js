import React from 'react'
import './SearchPage.css'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow'
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
                image ="https://yt3.ggpht.com/ytc/AAUvwnhTXA5gPQc5tQB2-2lMOHJIzRJ-mdl8C1LYkftskg=s176-c-k-c0x00ffffff-no-rj-mo"
                Channel="MrBeast"
                verified
                subs = "53.8M"
                noOfVideo={702}
                description ="Accomplishments - Raised $20000000 To Plant 20000000 Trees - Given millions to charity - Donated over 100 cars lol - Gave ..."
            />
            <hr />
            <VideoRow 
                    title="Going Through The Same Drive Thru 1,000 Times"
                    views="90M views"
                    subs = "53.8M"
                    timeStamp="5 days ago"
                    description="I am so over this we are about to go through the drive thru 1000 times in a row and if we don't complete the laps before the end of the day, we ...."
                    channel="MrBeast"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_ObFtCl5O90TGNjjmA1_wdM6Orq1dKgQaA&usqp=CAU"
            />
            <VideoRow 
                    title="Going Through The Same Drive Thru 1,000 Times"
                    views="90M views"
                    subs = "53.8M"
                    timeStamp="5 days ago"
                    description="I am so over this we are about to go through the drive thru 1000 times in a row and if we don't complete the laps before the end of the day, we ..."
                    channel="MrBeast"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_ObFtCl5O90TGNjjmA1_wdM6Orq1dKgQaA&usqp=CAU"
            />
            <VideoRow 
                    title="Going Through The Same Drive Thru 1,000 Times"
                    views="90M views"
                    subs = "53.8M"
                    timeStamp="5 days ago"
                    description="I am so over this we are about to go through the drive thru 1000 times in a row and if we don't complete the laps before the end of the day, we ..."
                    channel="MrBeast"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_ObFtCl5O90TGNjjmA1_wdM6Orq1dKgQaA&usqp=CAU"
            />
            <VideoRow 
                    title="Going Through The Same Drive Thru 1,000 Times"
                    views="90M views"
                    subs = "53.8M"
                    timeStamp="5 days ago"
                    description="I am so over this we are about to go through the drive thru 1000 times in a row and if we don't complete the laps before the end of the day, we ..."
                    channel="MrBeast"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_ObFtCl5O90TGNjjmA1_wdM6Orq1dKgQaA&usqp=CAU"
            />
            <VideoRow 
                    title="Going Through The Same Drive Thru 1,000 Times"
                    views="90M views"
                    subs = "53.8M"
                    timeStamp="5 days ago"
                    description="I am so over this we are about to go through the drive thru 1000 times in a row and if we don't complete the laps before the end of the day, we ..."
                    channel="MrBeast"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_ObFtCl5O90TGNjjmA1_wdM6Orq1dKgQaA&usqp=CAU"
            />
        </div>
    )
}

export default SearchPage
