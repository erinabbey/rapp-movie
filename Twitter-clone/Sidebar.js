import React from 'react'
import SidebarOption from './SidebarOption'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core';
import './Sidebar.css'

function Sidebar (){
	
	return(
			
		<div className="sidebar" > 
			<TwitterIcon className="sidebar__twitterIcon" />	
			<SidebarOption Icon={HomeIcon} text ="Home" />
			<SidebarOption Icon={SearchIcon} text ="Explore" />	
			<SidebarOption Icon={NotificationsIcon} text ="Notifications" />		
			<SidebarOption Icon={MailOutlineIcon} text ="Messages" />		
			<SidebarOption Icon={BookmarkBorderIcon} text ="Boomarks" />		
			<SidebarOption Icon={PermIdentityIcon} text ="Profile" />
			<SidebarOption Icon={ListAltIcon} text ="List" />		
			<SidebarOption Icon={MoreHorizIcon} text ="More" />	
			<Button variant ="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>			
		</div>
	)
}

export default Sidebar