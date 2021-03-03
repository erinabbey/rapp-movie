import React, {useState} from 'react'
import ChoiceChange2 from './TestUseState/ChoiceChange2'

const CheckChoice = () => {
    const [characterNumber, setCharacterNumber] = useState([1, 2, 3, 4, 5]);
    const [chosenNumber, setChosenNumber] = useState(1);

    const handleChangeNumber=(newnumber)=>{
        setChosenNumber(newnumber)
    }
    return (
        <div>
            <select  onChange = {(e) => handleChangeNumber(e.target.value)}>
                {
                    characterNumber.map(choice => <option key = {choice}>{choice}</option>)
                }
            </select>
            <ChoiceChange2 chosenNumber = {chosenNumber}/>
        </div>
    )
}
export default CheckChoice
