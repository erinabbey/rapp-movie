import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SidebarRoute, 
    SideBtnWrap}
    from "./SidebarData"

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to = "/">Menu</SidebarLink>
                <SidebarLink to = "/">Dessert</SidebarLink>
                <SidebarLink to = "/">Cart</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to = "/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default SideBar
