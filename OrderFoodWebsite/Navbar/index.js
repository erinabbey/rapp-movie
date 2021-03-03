import React from 'react'
import {Nav, NavLink, Bars, NavIcon} from 'C:/Users/nguye/rapp/src/OrderFoodWebsite/Navbar/NavbarData'


const  Navbar =({toggle})=> {
    return (
        <>
            <Nav>                       {/* cai bao quanh ne; den cai NavLink la hien thi coi co the chuyen di ne,  */}
                <NavLink  to = '/' >Ngoc Huyen</NavLink>
                <NavIcon onClick = {toggle}>                 { /* cai nay bao quanh cai text va icon*/}
                    <p>Menu</p>
                    <Bars />            {/*cai nay de hien thi icon ne */}
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
