
  import { render } from '@testing-library/react'
  import React, {useState} from 'react'
    import PasswordStrength  from './PasswordStrength/PasswordStrength'
  import Passwordstr from './PasswordStrength/Passwordstr'
    function App(){
        const [password, setPassword] = useState('');
        console.log(password);
        return(
      <div className= "Container">
        <div className = "col-md-6 mx-auto">
          <h3 className ="text-center my-5">PasswordStrength</h3>
          <div className = "form-group mb-1">
            <input type = "password" 
            className = "form-control shadow-none" 
            placeholder = "Enter your password"
            onChange = {e => setPassword(e.target.value)}
            />
          </div>
          {/* send password to this */}
          <PasswordStrength password = {password} />
  
        </div>
      </div>
        )
      }
    export default App
  
  
  