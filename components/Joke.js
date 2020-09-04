import React from 'react'


function Joke (props){
console.log(props)
return(
<div>
<h2> {id}</h2>
<h3 style={{display: !props.question &&"none"}}>Question: {props.question} </h3>
<h3 style={{display: !props.answer && "none"}}>Anwser: {props.answer}</h3>
</div>
	)
}
export default Joke;