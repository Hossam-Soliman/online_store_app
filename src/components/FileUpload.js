import React, {useState} from 'react';
import {AiOutlinePlus} from "react-icons/ai"
import {useDropzone} from 'react-dropzone';
import {withRouter} from 'react-router-dom'

const FileUpload = ({AddFile}) => {

    const[file, setFile] = useState('')
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));

    //   const newImage = (e) =>{
    //       setFile(e.target.value)
    //       AddFile(file)
    //   }
    
    return (
        <div className="upload-center" style={{display: 'flex', justifyContent:'space-between', width: '800px', marginBottom: 50}}>
            <div>
                <div style={{width: 350, height: 240, border: '1px solid black'}} {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    <AiOutlinePlus size= '100px' color = "black" style={{marginTop:60}}/>
                    <p>Drop some files here, or click to select files</p>
                </div>
                <aside>
                    <ul style={{listStyle:'none'}}>{files}</ul>
                </aside>
                
            </div>
            

            <div style={{width: 350, height: 240, display: 'flex', border: '1px solid red'}}>
                <img />
            </div>
        
        </div>
     );
}
 
export default withRouter(FileUpload);