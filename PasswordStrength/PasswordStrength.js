import React from 'react'
import zxcvbn from 'zxcvbn'

const PasswordStrength = ({password})=> {
    const testResult = zxcvbn(password);// show score of input password
    const num = testResult.score*100/4;// max score: 4
    console.log(testResult);
    console.log(num);

    const changepassColor = ()=>(
        {width: `${num}%`,
        background: ChangeColor(),
        heigth: '7px',
    }
        )
        // return color of progress bar base on pass strenght
   const ChangeColor = ()=>{
       switch(testResult.score){
           case 0:
               return '#E30B0B'
            case 1: 
                return '#E30B0B'
            case 2:
                return '#E3740B'
            case 3:
                return '#2350A3'
            case 4:
                return  '#23A33D'
                default:
                    return 'none'
       }
   }
   // show text below progress bar
   const Passwordlabel = ()=>{
       switch(testResult.score){
        case 0:
            return 'Weak'
         case 1: 
             return 'Weak'
         case 2:
             return 'Medium'
         case 3:
            return 'Good'
         case 4:
             return  'Strong'
             default:
                 return 'none'
       }
   }
   const stylePro = {
       height: '10px',
       borderRadius: '8px',
   }
    return (
        <>
            <div className = "progress" 
            style = {stylePro}>
                <div className = "progress-bar" 
                style = {changepassColor()}
                >
                </div>
                <br/>
            </div>
            <p style = {{float:'right'}}>{Passwordlabel()}</p>
        </>
    )
}

export default PasswordStrength

 