import React , {useRef, useEffect, useState, useCallback} from 'react'


const FocusInput = () =>{
   /* 
    const inputEle = useRef(null);

    const onClick = ()=>{
        inputEle.current.focus();
    }
    return (
        <React.Fragment>
            <input ref = {inputEle} type = "text"></input>
            <button onClick = {onClick}>Focus input</button>
        </React.Fragment>
    )*/


    const [count, setCount] = useState(0);
    /*useEffect(() =>{
        console.log('rendered');
    });*/

    const addAvocado = () =>{
        setCount(count + 1);
    };

    const memoiziedAvoca = useCallback(
        () => {
            setCount((e) => e + 1);
        },[setCount]);
    
return(
   
        /* <div>{Array(count).fill('🥑').join(',')}</div>
        <button onClick = { () => setCount(count + 1)}> Avacado </button>
        <button onClick = {()=> setCount(count - 1)}>Minus Avocado </button> */

        <React.Fragment>
        <AddAvoca add = {memoiziedAvoca} />
        <div>{Array(count).fill('🥑').join(',')}</div>
        </React.Fragment>
);
};
// luu y o day dung addAvoca se  loi: never read
const AddAvoca = React.memo(({add}) =>{
    console.log('re-rendered');

    return <button onClick ={add}>Add Avocado</button>;
});

export default FocusInput