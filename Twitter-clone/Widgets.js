import React from 'react'
import './Widget.css'
import SearchIcon from '@material-ui/icons/Search';
import{
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed'
function Widgets() {
    return (
            <div className="widgets">
                <div className ="widgets__input">
                    <SearchIcon  className ="widgets__searchIcon" />
                    <input  placeholder="Search Twitter" type ="text"/>
                </div>
                <div className ="widgets__widgetContainer">
                    <TwitterTimelineEmbed 
                    sourceType ="profile"
                    screenName ="jvfk11"
                    options ={{height: 400}}
                    />
                    <TwitterTweetEmbed tweetId={"1299309155832872960"}/>
                    <TwitterTweetEmbed tweetId={"1299354536805425153"}/>
                   <TwitterShareButton url ={"https://www.facebook.com/jvfk.jvfk/"}
                   option={{text: "#learning React js", via: "Erin Abbey"}} />

                </div>
            </div>
            
       
    )
}

export default Widgets
