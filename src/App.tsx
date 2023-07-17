import './index.css';
import ImageUploader from './components/ImageUploader';
import Loading from './components/loading';
import Success from './components/Success';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [link, setLink] = useState<string>("");
  const upLoadImage = (files: FileList | null) => {
    if (files) {
        setLoading(true);
        const formData: FormData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "b4hi3sus");
        Axios.post("https://api.cloudinary.com/v1_1/dsmjgw4ty/image/upload", formData)
            .then((res) => {
              setLink(res.data.url)
              setFiles(files)
              setLoading(false);
        })
    }
}

  return (
    <>
      {
        loading? <Loading/> :(!files ? <ImageUploader  upLoadImage={upLoadImage}  /> : <Success link={link}  files={files} />)
      }
    </>  
  )
}

export default App
