
import React,  {useState} from 'react';

	import './App.css';
  // import Maps from './Maps'
  import Sidebar from './Sidebar';
  import Feed from './Feed';
  import Widgets from './Widgets';
  import TweetBox from './TweetBox'
	// import Message from './component/Message'
	// import MessageList from './component/MessageList'
	// import NewRoomForm from './component/NewRoomForm'
	// import RoomList from './component/RoomList'
	// import SendMessageForm from './component/SendMessageForm'
	// import Chatkit from '@pusher/chatkit'
	//import { Map, GoogleApiWrapper } from 'google-maps-react';
	const api={
		key: "3cfe6641488ced18a71c22a8b572e37d",
		base: "https://api.openweathermap.org/data/2.5/"
	}

{/*
	function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
	 return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div className='third'>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
        <Maps/>
      </main>
    </div>
   
    
    
  );
	
		}
-- weather app
  */}

// class App extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 				<p>ngoc huyen</p>
// 			</div>
// 			)
// 	}
// }
class App extends React.Component{
  render(){
    return(
      <div className="app">
       <Sidebar />
       <Feed />
       <Widgets />
      </div>
    )
  }
}
	export default App


