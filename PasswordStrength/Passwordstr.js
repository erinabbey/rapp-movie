import React from 'react'
import zxcvbn from 'zxcvbn'

 const Passwordstr = ({password})=> {
    const result = zxcvbn(password);
    const percentScore = result.score*100/4;


    const changeProgressColor = ()=>{
        switch(percentScore){
            case 0:
                return '#E30B0B'
            case 25:
                return '#E30B0B'
            case 50:
                return '#E3740B'
            case 75:
                return '#2350A3'
            case 100:
                return '#23A33D'
            default:
                return 'none'
        }
    }
    const Showtext =()=> {
        switch(percentScore){
            case 0:
                return 'Weak'
            case 25:
                return 'Weak'
            case 50:
                return 'Medium'
            case 75:
                return 'Good'
            case 100:
                return 'Strong'
            default:
                return 'none'
        }
    }
    const styleprogress = {
        borderRadius: '10px',
        height: '8px',
        background: 'lightgray'
    }
    const ProgressColor = ()=>({
        background: changeProgressColor(),
        width: `${percentScore}%`,
        height: '8px',
    })

    return (
        <>
        <div className ="progess" style = {styleprogress} >
            <div className = 'progress-bar'
            style = {ProgressColor()}
            >
            </div>
        </div>
        <p style = {{float: 'right'}}>
            {Showtext()}
        </p>
        </>
    )
}
export default Passwordstr
