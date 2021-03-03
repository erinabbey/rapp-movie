import React from 'react'
 import {BrowserRouter, Route, Link} from 'react-router-dom'
 import {UserContext, UserProvider} from './UserContext'
 import Dashboard from './Dashboard'
 import Settings from './Settings'
 
 export default ()=>{
     const user = {
        name: 'ngoc huyen',
        email: 'ngochuyennguyen@gmail.com',
     }
     return(
         <BrowserRouter>
         <ul>
             <li><Link to ="/">Dashboard</Link></li>
             <li><Link to ="/settings">Settings</Link></li>
         </ul>
         <UserProvider value = {user}>
            <Route path = "/" exact component ={Dashboard}></Route>
            <Route path = "/settings" component = {Settings}></Route>
         </UserProvider>
         </BrowserRouter>
     )
 }