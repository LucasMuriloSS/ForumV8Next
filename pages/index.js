import Nav from "./navbar"
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/newpost.module.css'
import { AuthContext } from '../contexts/AuthContext.tsx'
import Axios from "axios";
import { Fragment, useContext, useEffect, useState, useSyncExternalStore, React, Render } from 'react'

import perfil from '../assets/perfil.png'
import Footer from "./footer"

export default function Home() {

	const [load, setLoad] = useState(false)
	const [pass, setpass] = useState(false)

	const [Post, setPost] = useState([]);
	const [Comment, setComment] = useState([]);

	const lastPosts = async (value) => {

		await Axios.get('http://localhost:3001/Getlast',{

		}).then((res)=>{

			setPost(res.data)
			setpass(true)

		})

		if(pass == true){

			await Axios.get('http://localhost:3001/GetlastComments',{

			}).then((res)=>{
				
				setComment(res.data)
				setLoad(true)

			})

		}

	}

	useEffect(() => {
        
        lastPosts() 	

    }, [pass])

	function avatar(buffer){
        //usado para converter o buffer da imagem para base 64 e depois mostra-lá na tela
        
        if(buffer){

        const result = Buffer.from(buffer).toString('base64')
            
        return ("data:image/jpg;base64,"+ result)
        }
            
        
    }

return (

    <div>
      <Nav loaded={load}></Nav>
      <main className="container">
		  
		<div className="d-flex align-items-center p-3 my-3 text-white bg-danger rounded shadow-sm">
		  
			
		  <div className="lh-1">
			<h1 className="h6 mb-0 text-black lh-1 ">V8 RACING</h1>
			
		  </div>
		</div>

		<div className="my-3 p-3 bg-body rounded shadow-sm">
			
			<div>
				<h6 className="border-bottom pb-2 mb-0">Últimos Posts</h6>

			</div>
			

						{
                        Post.map((Info) =>

                            <div className="d-flex text-muted pt-3">
                                
            
                
                                {/* <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg> */}

                                <div>
                                <Image src={avatar(Info.image)||perfil} className="rounded" width="50" height="50"></Image>
                                </div>

                                <Link href={`/posts/`+Info.id}>
                                    <a className="nav-link">
                                        <p className="pb-3 mb-0 small lh-sm border-bottom">
                                            <strong className="d-block text-gray-dark">{Info.title}</strong>
                    
                                            {Info.name}

                                        </p>
                                    </a>
                                </Link>

                            </div>

                        )}

		  </div>
	  
		<div className="my-3 p-3 bg-body rounded shadow-sm">
		  <h6 className="border-bottom pb-2 mb-0">Últimos Comentários</h6>

			{
				Comment.map((Info) =>

					<div className="d-flex text-muted pt-3">
						

		

						<div>
						<Image src={avatar(Info.image)||perfil} className="rounded" width="50" height="50"></Image>
						</div>

						<Link href={`/posts/`+Info.id}>
							<a className="nav-link">
								<p className="pb-3 mb-0 small lh-sm border-bottom">
									<strong className="d-block text-gray-dark">{Info.text}</strong>
									{Info.name}
									

								</p>
								

							</a>
						</Link>

					</div>

				)}
						



		  {/* <div className="d-flex text-muted pt-3">
			<svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"></rect><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
	  
			<p className="pb-3 mb-0 small lh-sm border-bottom">
			  <strong className="d-block text-gray-dark">@username</strong>
			  texto texto texto texto texto texto texto texto 
			</p>
		  </div> */}

		  <small className="d-block text-end mt-3">
			<a href="#">All updates</a>
		  </small>
		</div>
	  
		<div className="my-3 p-3 bg-body rounded shadow-sm">
		  <h6 className="border-bottom pb-2 mb-0">Sugestões</h6>
		  <div className="d-flex text-muted pt-3">
			<svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
	
			<div className="pb-3 mb-0 small lh-sm border-bottom w-100">
			  <div className="d-flex justify-content-between">
				<strong className="text-gray-dark">Full Name</strong>
				<a href="#">Follow</a>
			  </div>
			  <span className="d-block">@username</span>
			</div>
		  </div>

		  <div className="d-flex text-muted pt-3">
			<svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
	  
			<div className="pb-3 mb-0 small lh-sm border-bottom w-100">
			  <div className="d-flex justify-content-between">
				<strong className="text-gray-dark">Full Name</strong>
				<a href="#">Follow</a>
			  </div>
			  <span className="d-block">@username</span>
			</div>

		  </div>
		  <small className="d-block text-end mt-3">
			<a href="#">All suggestions</a>
		  </small>
		</div>

	  </main>
	  <Footer></Footer>
    </div>
    

  )
}
