import React, {Component} from 'react'

const Exchange = ()=>(
    <div>
        <h2>Dollar to Euro</h2>
        <ChildrenasFunction render = {amount=> <Euro amount = {amount}/>}/>
        <h2>Dollar to Pound</h2>
        <ChildrenasFunction render = {amount => <Pound amount = {amount}/>}/>
    </div>
)
class ChildrenasFunction extends Component{
    constructor(props){
        super(props);
        this.state= {
            amount: 0,
        }
    }
    // pass props as state
        
        // this.state = {
        //     test: props.initialValue,
        // } 
    
  
        onChange = event=>{
            this.setState({text: event.target.value})
        }
    // pass props as state

    OnIncrement = ()=>{
        this.setState(state=>({amount: state.amount + 1}))
    }

    OnDecrement = ()=>{
        this.setState(state => ({amount: state.amount - 1}))
    }
    render()
    {
        return(
            <div>
                <p>US Dollar : {this.state.amount}</p>
                <button onClick = {this.OnIncrement}>+</button>
                <button onClick = {this.OnDecrement}>-</button>
                
                <Euro amount = {this.state.amount}/>
                <Pound amount = {this.state.amount}/>
            </div>
        )
    }
}
const Euro = ({amount})=><p>Euro: {amount * 0.86}</p>
const Pound = ({amount})=><p>Pound: {amount * 0.76}</p>


// pass props as state
const Item = ({key, children})=>(
    <p>{key} {children}</p>
)
const List = ({users})=>(
    <ul>
        {users.map(user =><Item key = {user.id} children = {user.name} />)}
    </ul>
)
export default ChildrenasFunction