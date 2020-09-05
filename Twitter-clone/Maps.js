import React from 'react'
 import {Map, GoogleApiWrapper} from 'google-maps-react'
 class Maps extends React.Component{
 	constructor(props){
 		super(props)

 	}
render(){
	const mapStyles ={
		
		height: '70%',
		position: 'relative',
		width: '50%',
		float:'right',
		marginRight: '100px'
	
}
	return(
	<Map 
	google={this.props.google}
	zoom ={8}
	style ={mapStyles}
	initialCenter ={ {lat: 47.444, lng: -122.176}}
	/>
	)}

 }
 export default GoogleApiWrapper({ apikey: 'AIzaSyDIiFz-kxCH9kQjyUcGydkDNiRjA62qS3s'})(Maps);