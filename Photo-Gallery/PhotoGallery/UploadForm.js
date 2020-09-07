import React, {useState} from 'react'
import ProgressBar from './ProgressBar'
const UploadForm = ()=> {
    const[file, setFile] = useState(null);

    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg', 'image/jpg'];// accept type of file to upload

    const changeHandler = (e)=>{
        let selected = e.target.files[0];

        console.log(selected);

        if(selected && types.includes(selected.type)){// dung loai duoi anh thi cho upload
            setFile(selected);
            setError(' ');
        }
        else{// sai loai file, 
            setFile(null);
            setError('Select file with png, jpeg or jpg');

        }
 
            
    }

    return (
        <form>
            <label>
            <input  type ='file' onChange ={changeHandler}/>
            <span>+</span>
            </label>
            <div className ="output">
                {error && <div className ="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file ={file} setFile = {setFile}/>}
            </div>

        </form>
    )
}

export default UploadForm
