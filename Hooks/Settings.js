import React, {useContext} from 'react'

import {UserContext} from './UserContext'

export default () =>{
    const [user, setUser] = useContext(UserContext);

    const changeEmail = () =>{
        setUser(
            ...user,
            email: "ngochuyen@gmail.com",
        )
    }

    return(
        <React.Fragment>
            <h1>Settings</h1>
            <span>Logged in as {user.name} ({user.email})</span>
            <br/>
            <button onClick = {changeEmail}>Change email</button>
        </React.Fragment>
    )
}