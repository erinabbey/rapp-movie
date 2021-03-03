import React, {useContext} from 'react'
import UserContext from './UserContext'

export default () =>{
const user = useContext(UserContext);
return(
    <React.Fragment>
        <h1>Dashboard</h1>
        <span>Logged in {user.name} ({user.email})</span>
    </React.Fragment>
    )
}
