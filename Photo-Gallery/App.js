import React, {useState} from 'react'
import './App.css'
import Title from './PhotoGallery/Title'
import UploadForm from './PhotoGallery/UploadForm'
import ImageGrid from './PhotoGallery/ImageGrid'
import Modal from './PhotoGallery/Modal'
function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg = {setSelectedImg}/>
      {selectedImg && (<Modal selectedImg ={selectedImg} setSelectedImg={setSelectedImg}/>)}
    </div>
  )
}

export default App
