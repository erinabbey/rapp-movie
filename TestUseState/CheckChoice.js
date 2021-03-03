import React from 'react'
import ChoiceChange from './TestUseState.ChoiceChange'

class CheckChoice extends React.Component {
    state = {
        characterChoiceNumber: [1, 2, 3, 4, 5],
        chosenNumber : 1
      }
  
       handleChoiceChange = (newnumber)=>{
        this.setState({
          chosenNumber: newnumber
        })
      }
  
     render(){
      return(
        <div>
          <select onChange = {(e) => this.handleChoiceChange(e.target.value)}>
        {
          this.state.characterChoiceNumber.map(choice => <option key = {choice}>{choice}</option>)
        }
          </select>
          <ChoiceChange chosenNumber = {this.state.chosenNumber}/>
        </div>
      )
    }
}
export default CheckChoice
