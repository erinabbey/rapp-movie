import React, {Component} from 'react'

 class ThreeDotSyntax extends Component{
render(){
    const greeting = {
        subject: 'Math',
        Decrip: 'Hard or ez',
    }
    return(
    <div>
        <Greeting {...greeting} />
        <Threedot {...greeting}/>

        <Greeting  subject = {greeting.subject}
                    description = {greeting.Decrip} />

    <greet  subject = {greeting.subject}
            Decrip = {greeting.Descrip}   />
    
    </div>
    )
}
}

const Greeting = ({ subject, description }) => (
    <div>
      <Title title={`Welcome to ${subject}`} />
      <Descrip Decrip={description} />
    </div>
  );
   
const greet = ({subject, decrip})=>{
    subject = subject || 'other';
   return(
    <div>
    <Title  title = {`greeting ${subject}`}/>
    <Descrip  Decrip = {decrip} />
    </div>
)}

const Threedot = ({subject, ...other})=>(
<div>
    <Title  title = {`welcome to thre dot syntax ${subject = subject||'Other'}`}/>
    <Descrip  {...other}/>
    </div>
)

const Title = ({ title }) => <h1>{title}</h1>;
const Descrip= ({ Decrip }) => <p>{Decrip}</p>;{/* desciption o day phai gionh voi cai da dinh nghia o greeting */}

export default ThreeDotSyntax