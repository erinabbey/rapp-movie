import React from 'react'
import { SidebarData } from '../SideBarMenu/SidebarData'

function SideBar() {
    return (
        <div className = "Sidebar">
            <ul className = "SidebarList">
           {
               SidebarData.map((value, key ) =>{// mapping function
                   return(
                       <li 
                       className = "row"
                       id = {window.location.pathname === value.link? "active" : "" }
                       key = {key} 
                       onClick = {() => {window.location.pathname = value.link}}>
                           {" "}
                            <div className = "icon">{value.icon }</div>  {/*show icon to the left */}
                            {" "}
                            <div className = "title">{value.title} </div>   {/* show title to the right*/}
                            </li>
                   )
               })
           }
           </ul>
        </div>
    )
}

export default SideBar
