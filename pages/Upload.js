import { useEffect, useState } from "react";
import Image from 'next/image'
import { parseCookies } from "nookies"
import perfil from '../assets/perfil.png'

export default function Upload({onSubmit}){

  const [hasdata,sethasdata] = useState(false)//usado para acionar o useEffect depois de fazer upload da imagem

  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);// cria uma Url para mostrar a imagem que o usuarío selecionou
  
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);// coloca a imagem que o úsuario selecionou em image
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  useEffect(()=>{
    
    onSubmit(hasdata);//envia o estado de hasdata para profile 

  },[hasdata])
  
  const uploadToServer = async (event) => {

    const body = new FormData();
    const { 'authV8Login': token } = parseCookies()

    body.append("file", image);
    body.append("token", token);

    //adiciona file e token no body e envia o body para api

    const response = await fetch("https://apicadastrologin.herokuapp.com/saveImage", {
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
        {/* mostra a imagem que o usuário selecionou ou uma imagem pré definida */}
        <Image src={createObjectURL || perfil} alt="avatar"className="rounded-circle" width={200} height={200} />
        </div>
        
        <h4></h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
       
        <button className="btn btn-primary" type="submit" onClick={uploadToServer}>Send to server</button>
      
      </div>
    </div>
  );
}
