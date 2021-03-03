import React from 'react'

class  TestProps extends React.Component {
    render(){
        const greeting = "ngoc huyen cc"
    return (
        <div>
            <Greeting  greeting = {greeting}/>
            <MN  gre = {{text: "ngoc huyen nguyen"}}/>
        </div>
    )
}
}
const Greeting = (props) => <h3>{props.greeting}</h3>
const MN = ({gre}) =><h3>{gre.text}</h3>
//const Greeting = ({greeting}) => <h3>{greeting}</h3> -->destructuer props early in the function signature
export default TestProps
