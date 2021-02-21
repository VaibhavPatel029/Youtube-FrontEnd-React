import React, {useState} from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Link} from 'react-router-dom'

function Header() {
    const [inputSearch, setinputSearch] = useState("");
    

    return (
        <div className="header">
        <div className="header__left">
            <MenuIcon />
            <Link to="/">
                 <img
                    className="header__logo"
                    src="https://cdn.worldvectorlogo.com/logos/youtube-2.svg" 
                    alt="" 
                />
            </Link>
             
        </div>
        <div className="header__input">
             <input 
             onChange={e => setinputSearch(e.target.value)} 
             type="text" 
             placeholder="Search"
             value={inputSearch}
            
             />
             <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header__inputbutton"/>
             </Link>
              
        </div>
        <div className="header__icons">
             <VideoCallIcon className="header__icon"/>
              <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon" />
              <AccountCircleIcon className="header__icon"/>
        </div>
        
        </div>
    )
}

export default Header
