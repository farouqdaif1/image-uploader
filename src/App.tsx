import './index.css';
import ImageUploader from './components/ImageUploader';
import Loading from './components/loading';
import Success from './components/Success';
import {  useEffect, useState } from 'react';
function App() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
},[files])
  return (
    <>
      {
        loading? <Loading/> :(!files ? <ImageUploader files={files} setFiles={setFiles} /> : <Success files={files} />)
      }
    </>  
  )
}

export default App
