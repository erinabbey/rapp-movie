import React, {useState} from 'react'

// const useRef_1 = (props)=>{

//         let count = 0
//         const [renderState, setRenderState] = useState("0")
         
//         let updateState = ()=>{
//             count++;
//             setRenderState(renderState + "+")
//             console.log(renderState)
//         }
    
//     return (
//         <div>
//             <h4>current state: {renderState}</h4>
//             <input type = 'button'  onClick = {() => {updateState()}}></input>

//         </div>
//     )
// }


const useRef_1 = () => {
  console.log("fuction called....");
  let counter = 0;
  let [myState, setMyState] = useState("A");
  
  let updateState = () => {
    counter++;
    setMyState(myState + "-u-");
    console.log("counter: "+ counter);
  }

  return (
    
      <div>
        <div>MyState : {myState}</div>
        <input type="button" onClick = {() => updateState()} value="Update State"></input>
      </div>
  );
}

export default useRef_1
