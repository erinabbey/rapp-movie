import React from 'react';
import {Button} from '../../Button'
import '../Footer/Footer.css'

function SignUp() {
  return (
    <>
      <div className ='input-area'>
                        <form>
                            <input 
                            className= 'footer-input'
                            name= 'email'
                            type='email'
                            placeholder = 'Enter your Email'
                            >
                            </input>
                            <input 
                            className= 'footer-input'
                            name= 'password'
                            type='password'
                            placeholder = 'Enter your Password'
                            >
                            </input>

                            <Button buttonStyle= 'btn--wide'>Sign up</Button>
                        </form>
                    </div>
      
      
    </>
  );
}

export default SignUp;