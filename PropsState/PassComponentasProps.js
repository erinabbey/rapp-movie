import React, {Component} from 'react'

class PassComponentasProps extends Component{
    render(){
        const  user = {
            user: 'Nguyen Ngoc Huyen',
            avatar: './2.jpg',
            biography: 'You only live once',
        }
        
        return(
            <div>
                <User  user = {user}/>
            </div>
        )
    }
}

const User = ({user}) =>(
    <Profile
    user ={user}
    avatar ={<Avatar user = {user} />}
    biography = {<Biography user = {user}/>}
    />
)

const Profile = ({user, avatar, bigraphy}) =>(
    <div className = "profile">
        <div>{avatar}</div>
        <div>
            <p>{user.name}</p>
            {bigraphy}
        </div>
    </div>
)

const Avatar = ({user})=>(
    <img className = "Avatar" alt = "ngoc huyen" src = {user.AvatarUrl}/>
)

const Biography = ({user})=>(
<p  className = "Biography">{user.biography}</p>
)
export default PassComponentasProps