interface  ChildProps {
  files: FileList | null;
  link: string;
}
const Success = ({ files,link }: ChildProps) => {
  let fileX : string | undefined = undefined 
    if(files)
      if (files[0].type.match(/^image\//)) {
        fileX = URL.createObjectURL(files[0]);
      }
 
      const Copy=()=> {
        // Get the text field
        const copyText= document.getElementById("myInput")as HTMLInputElement;
        copyText.select();
        copyText.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(copyText.value);
        
        }
      

  return (
    <div className="success-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" fill="none">
              <g clipPath="url(#clip0_1_56)">
              <path d="M21.0001 3.92381C11.3401 3.92381 3.50012 11.7638 3.50012 21.4238C3.50012 31.0838 11.3401 38.9238 21.0001 38.9238C30.6601 38.9238 38.5001 31.0838 38.5001 21.4238C38.5001 11.7638 30.6601 3.92381 21.0001 3.92381ZM16.2576 28.9313L9.97512 22.6488C9.29262 21.9663 9.29262 20.8638 9.97512 20.1813C10.6576 19.4988 11.7601 19.4988 12.4426 20.1813L17.5001 25.2213L29.5401 13.1813C30.2226 12.4988 31.3251 12.4988 32.0076 13.1813C32.6901 13.8638 32.6901 14.9663 32.0076 15.6488L18.7251 28.9313C18.0601 29.6138 16.9401 29.6138 16.2576 28.9313Z" fill="#219653"/>
              </g>
            <defs>
              <clipPath id="clip0_1_56">
                <rect width="42" height="42" fill="white" transform="translate(0.00012207 0.423584)"/>
              </clipPath>
            </defs>
          </svg>
          <p>Uploaded Successfully!</p>
          <img id='output' className="div-image" src={fileX} />
          <div className="link">
              <input type="text" defaultValue={link} id="myInput" />
              <button onClick={Copy}>Copy Link</button> 
          </div>
    </div>
  )
  }

export default Success
