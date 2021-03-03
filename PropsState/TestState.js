import React from 'react'

class TestState extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isShow: true,
        };
    }
    tonggleShow = ()=>{
        this.setState(state => ({isShow:  !state.isShow}))
    }
    render(){
        const greeting = "Ngoc Huyen Nguyen"
    return (
        <div>
        {/* {this.state.isShow ? <Greeting greeting = {greeting} /> :null} */}
        {/*dau tien se hien thi greeting, va button, nhan vao button thi thi bien isShow se chuyen sang true/false tuy vao gia tri khoi tao ban dau */}
        <Greeting  greeting = {greeting} isShow = {this.state.isShow}/>
        {/* cai  button nay muc dich la de thay doi gia tri cua isShow, true/false de hien thi cai greeting */}
        <button onClick = {this.tonggleShow} type = "button">
            TonggleShow
        </button>
        </div>
    )
}}

const Greeting = ({greeting, isShow})=> isShow ?<h3> {greeting}</h3> :null
export default TestState
 