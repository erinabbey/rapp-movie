import React from 'react'
import ReactDOM from 'react-dom'
{/*
function TodoItem(){
	return(
		<div  class="todo-item">
      
      <input type="checkbox"/>
      <p>check box 1</p>
      <input type="checkbox"/>
      <p>check box 2</p>
      <input type="checkbox"/>
      <p>check box 3</p>
      </div>

		)
}
export default TodoItem;
*/}
{/*
function Contactcard(props){
console.log(props);
return(
<div>
<img src = {props.contact.imgurl}/>
<h2>Name: {props.contact.name}</h2>
<h4>Phone: {props.contact.phone}</h4>
<h4>Email: {props.contact.email}</h4>
</div>
	)
}
export default Contactcard;*/}

function TodoItem(props){
      return(
<div class ="todo-item">
<input type= "checkbox" checked ={props.items.completed}/>
<p> {props.items.text}</p>

</div>

            )
}
export default TodoItem