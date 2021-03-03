import React from 'react'
import HomeIcon from '@material-ui/icons/Home'; 
import MailIcon from '@material-ui/icons/Mail';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ImageIcon from '@material-ui/icons/Image';
import GroupIcon from '@material-ui/icons/Group';

export const SidebarData = [
{
    title: 'Home',
    icon: <HomeIcon />,
    link: "/home",
},
{
    title: 'Dashboard',
    icon: <DashboardIcon />,
    link: "/dashboard",
},
{
    title: 'Mail',
    icon: <MailIcon />,
    link: "/mailbox",
},
{
    title: 'Analytics',
    icon: <AssessmentIcon />,
    link: "/analytics",
},
{
    title: 'Image',
    icon: <ImageIcon />,
    link: "/image",
},
{
    title: 'Friends',
    icon: <GroupIcon />,
    link: "/friend",
},

]
