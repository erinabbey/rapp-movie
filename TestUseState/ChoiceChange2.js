import React, {useState, useEffect} from 'react'


const ChoiceChange2 = (props)=>{
    const [characterObject, setCharacterObject] = useState({});

    useEffect(()=>{
        fetch(`https:swapi.co/api/people/${props.chosenNumber}`)// fetch tu heroku, deo fetch duoc
        .then(resp => resp.json())
        .then(data =>{
            setCharacterObject(data)
        })
    }, [])
    

    useEffect(() =>{
        fetch(`https:swapi.co/api/people/${props.chosenNumber}`)
        .then(resp => resp.json())
        .then(data=>{
            setCharacterObject(data)
        })
    }, [props.chosenNumber])
 return(
<div>
    {
        Object.keys(characterObject).length !== 0?
        <div>
            <h2>{characterObject}</h2>
            </div>:<h2> loading</h2>// always return loading
    }
</div>
 )
}
export default ChoiceChange2