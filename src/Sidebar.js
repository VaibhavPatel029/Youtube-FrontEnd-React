import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className="sidebar">
        <SidebarRow selected  Icon={HomeIcon} titel="Home"/>
        <SidebarRow Icon={WhatshotIcon} titel="Trending"/>
        <SidebarRow Icon={SubscriptionsIcon} titel="Sunscrition"/>
        <hr />
        <SidebarRow Icon={VideoLibraryIcon} titel="Library"/>
        <SidebarRow Icon={HistoryIcon} titel="History"/>
        <SidebarRow Icon={OndemandVideoIcon} titel="Your videos"/>
        <SidebarRow Icon={WatchLaterIcon} titel="Watch Later"/>
        <SidebarRow Icon={ThumbUpAltIcon} titel="Liked video"/>
        <SidebarRow Icon={ExpandMoreIcon} titel="Show more"/>
        <hr />

        </div>
    )
}

export default Sidebar
