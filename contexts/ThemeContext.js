import React, {createContext, useState} from 'react'


export const ThemeContext = createContext()


const ThemeContextProvider = () =>{
    // State
const [theme, setTheme] = useState({
    isLightTheme: true,
    dark:{
        background: '#14213d',
        color: 'black'
},
    light:{
        color: 'black',
        background: '#e5e5e5'
    }
})
}