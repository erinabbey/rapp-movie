import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../SideBar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroData'

const Hero =()=> {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const showMenu = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <HeroContainer>
            <Navbar toggle= {showMenu}/>
            <Sidebar isOpen = {isOpen} toggle = {showMenu}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Do you like Pizza</HeroH1>
                    <HeroP>We are all ready for you</HeroP>
                    <HeroBtn>Order now</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
