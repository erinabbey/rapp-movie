import React, {Component} from 'react'
import styled from 'styled-components'

class PropstoStyle extends Component{
    constructor(props){
        super(props);
        this.state={
        value: '',
    }
    }
    onChange = event =>{
        this.setState({value: event.target.value})
    }

render(){
    return(
<div>
    <Input 
    value= {this.state.value}
        onChange = {this.onChange}
    />
</div>
    )
}
}
const Input = styled.input`
padding: 0.5em;
margin: 0.5em;
color: palevioletred;
background: papayawhip;
border: none;
border-radius: 3px;
`;
export default PropstoStyle