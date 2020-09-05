import React, {useState} from 'react'
import './TweetBox.css'
import {Avatar, Button} from "@material-ui/core"
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] =useState('');
    const sendTweet = e=>{
        e.preventDefault();

        db.collection('posts').add({
            displayName : 'Nguyen Ngoc Huyen',
            userName: 'Jvfk',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://vtv1.mediacdn.vn/zoom/700_438/2020/6/2/1591067420-20200601-lisa-15910726681152074573621.jpg",
        })
        setTweetMessage('')
        setTweetImage('')

    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={"https://vtv1.mediacdn.vn/zoom/700_438/2020/6/2/1591067420-20200601-lisa-15910726681152074573621.jpg"}/>
                <input 
                onChange ={ (e)=> setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's happening?" 
                type ="text"></input>
                </div>
                
                <input 
                onChange ={(e)=>setTweetImage(e.target.value)}
                value ={tweetImage}
                className ="tweetBox__imageInput"
                placeholder="Enter url image" 
                type ="text"></input>
                
                <Button onClick={sendTweet} type="submit" className='tweetBox__tweetButton'>Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox
