import React, {Component} from 'react'

 class TestPassProps extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShow: true,
        }
    }
    allowShow = ()=>{
        this.setState(state =>
            ({isShow: !state.isShow})
        )
    }
    render(){
        const greeting = "show nude"
        return(
            <div>
                {this.state.isShow ? <Greeting  greeting = {greeting}/> : null}
                <Button onClick = {this.allowShow} />
            </div>
        )
    }
}
// bien  onClick nay khi len tren la bien truyen vao, la bang allowShow, Button nay la lop show ra cai button va them 
// event cho no, thay vi them button o render nhu TestState
const Button = ({onClick}) =>(
    <button  onClick = {onClick}>
        Show text
    </button>
)
const Greeting = ({greeting}) => <h3>{greeting}</h3>
export default TestPassProps