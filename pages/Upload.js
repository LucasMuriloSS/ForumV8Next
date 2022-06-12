import { useState } from "react";
import Image from 'next/image'
import { parseCookies } from "nookies"
import perfil from '../assets/perfil.png'

export default function Upload({childToParent}){

  //
  const [hasdata,sethasdata] = useState(false)

  //

  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  function updateImage(){
      childToParent(hasdata)
  }

  const uploadToServer = async (event) => {

    const body = new FormData();
    const { 'authV8Login': token } = parseCookies()

    body.append("file", image);
    body.append("token", token);

    const response = await fetch("http://localhost:3001/saveImage", {
      method: "POST",
      body
    }).then((res)=>{

      
      
      if(hasdata){ 
        
        sethasdata(false)}
      else{
        
        sethasdata(true)}
    
    });
    
  };

  return (
    <div>
      <div>
        
        <div className="d-flex flex-column align-items-center text-center">
        <Image src={createObjectURL || perfil} alt="avatar"className="rounded-circle" width={200} height={200} />
        </div>
        
        <h4></h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
       
        <button className="btn btn-primary" type="submit" onClick={uploadToServer}>Send to server</button>
        {updateImage()}
        
  
      </div>
    </div>
  );
}
