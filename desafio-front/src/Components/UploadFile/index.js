import React from "react";
import axios from 'axios';
import { UploadOutlined } from '@ant-design/icons';

function UploadFile({onChange}) {
  const onChangeFile = async ({target:{files}}) =>{
    try{
      const formData = new FormData();
      formData.append('name', "FILENAME");
      formData.append('file', files[0]);
      const {data} = await axios.post('http://127.0.0.1:8000/arquivos/listar_arquivos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
    onChange(data);
   }catch(error){
     alert(error.message)
   }
  }
  return (
       <div className="upload_file">
          <label for="inputTag">
            Enviar Arquivo <UploadOutlined />
            <input onChange={onChangeFile} type="file" id="inputTag" />
        </label>
       </div>
  );
}

export default UploadFile;