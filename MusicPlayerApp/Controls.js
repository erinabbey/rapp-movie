import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faBackward, faForward, faPause, faPlay} from '@fortawesome/free-solid-svg-icons'

function Controls(props) {
    return (
        <div className = "controls">
            <button className = "controls_skip" onClick = {() =>props.skipSong(false)}>
            <FontAwesomeIcon icon = {faBackward}/>
            </button>
            <button className = "controls_play" onClick = {() => props.setIsPlaying(!props.isPlaying)}>
            <FontAwesomeIcon icon = {props.isPlaying? faPause: faPlay}/>
            </button>
            <button className ="controls_skip" onClick = {() =>props.skipSong(false)} >
            <FontAwesomeIcon icon = {faForward}/>
            </button>
            
        </div>
    )
}

export default Controls
