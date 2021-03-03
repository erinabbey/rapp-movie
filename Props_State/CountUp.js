import React, {Component} from 'react'

class CountUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
    }
    countUp = ()=>{
        this.setState(state => ({count: state.count + 1})
        )}
    render(){
        return(
            <div>
                <h3>{` dume day d dung duoc ++ ma phai dung +1:  ${this.state.count}`}</h3>
            <Button  onClick = {this.countUp}>count up</Button>
            <button onMouseOver = {this.countUp}>over this</button>
            <button onMouseMoveCapture = {this.countUp}>Move capture</button>{/* re chuot trong button thi count++ */}
            <button onMouseOverCapture= {this.countUp}>Over capture</button>{/* deo khac gi over*/}
            <button onMouseOutCapture= {this.countUp}>Out capture</button>{/* di vao roi di ra lai la countup */}
            <button onMouseUpCapture = {this.countUp}>Up capture</button>{/* khong khac gi onClick */}

            </div>
        )
    }
}
const Button = ({onClick, children}) =>(
    <button onClick = {onClick} >{children}</button>
)
Button.defaultProps = {
    children: 'ngoc huyen'
}

export default CountUp