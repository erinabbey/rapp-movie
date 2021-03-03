import { initializeApp } from 'firebase'
import React, {useReducer} from 'react'


const initialState = {count: 0}
  /*
function Reducer (state, action){
    const [count, setCount] = React.useState(0);
    switch (action.type) {
        case 'increment':
            return setCount( count + 1);
        case 'decrement':
            return setCount(count -1);
        default:
             throw new Error();
    }
}
const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <StyledLogo src = {logo} count = {count}/>
            <Count count = {count}/>
            <div style = {{display: 'flex'}}>
                <button onClick = {() => dispatch({type: 'increment'})}> + </button>
                <button onClick = {() => dispatch({type: 'decrement'})}> - </button>
            </div>
        </div>
    )
}*/

const UseReducer =() =>{
    const [state, dispatch] = React.useReducer(reducer, 0);
    return(
        <React.Fragment>
            <button onClick = { () => dispatch('add')}> + </button>
            <button onClick = {() => dispatch('remove')}> - </button>
            <div>{Array(state).fill('🥑').join(',')}</div>
        </React.Fragment>
    )


}
const reducer = (state, action) =>{
    // neu day dung action.type thi cho dispatch truyen vao la dispatch({type: 'add'})
switch (action){
    case 'add':
        return state + 1;
    case 'remove':
        return state -1;
    default:
        return state
}
}

export default UseReducer
