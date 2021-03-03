import React, {Component} from 'react'

class PropsasState extends Component {
    render(){
        const greeting = {
            subject: 'math',
            Descrip: 'hard or ez',
        }
        return(
<div>
    <Object  greeting = {greeting} />
</div>
        )
    }
}
const Object = ({greeting}) => (
   
        <div>
            <Subject  subject = {`welcome to ${greeting.subject}`}/>
            <Descrip des = {greeting.Descrip} />
        </div>
    
)
const Subject = ({subject}) => <h3>{subject}</h3>
const Descrip = ({des}) => <h4>{des}</h4>

export default PropsasState 