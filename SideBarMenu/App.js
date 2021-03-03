

import { render } from '@testing-library/react'
import React, {useState} from 'react'
 import SideBar from './SideBarMenu/SideBar'
  import './App.css'

  class App extends React.Component{
     render(){
       return(
         <div className ="App">
           <SideBar />
           </div>
       )
     }
}
  export default App


