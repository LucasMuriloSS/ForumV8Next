import Nav from "../navbar"
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/newpost.module.css'
import { AuthContext } from '../../contexts/AuthContext.tsx'
import Axios from "axios";
import { Fragment, useContext, useEffect, useState, useSyncExternalStore, React, Render } from 'react'

import perfil from '../../assets/perfil.png'
import Footer from "../footer"
import {useRouter} from 'next/router'


function Eletrica(data) {

    const user = useContext(AuthContext)
    const router = useRouter()

    const [Post, setPost] = useState([]);// usado para atualizar a page
    const [hasupdate, sethasupdate] = useState(false);
    const [load, setLoad] = useState(false)

    const {search} = router.query

    // const recoverPostInfomation = async (value) => {

    //     await Axios.get('http://localhost:3001/Posts', {
    //         params: {
    //             System: "eletrica"
    //         }

    //     }).then((res) => {
    //         console.log(res.data)
    //         setPost(res.data)
    //         setLoad(true)

    //     })

    // }

    // useEffect(() => {

    //     recoverPostInfomation()


    // }, [])

    // function avatar(buffer){
    //     //usado para converter o buffer da imagem para base 64 e depois mostra-lá na tela
        
    //     if(buffer){

    //     const result = Buffer.from(buffer).toString('base64')
            
    //     return ("data:image/jpg;base64,"+ result)
    //     }
            
        
    // }

    // function post(){

        

    //     return <Post></Post>
    // }

    return (

        <div>
            
            <Nav loaded={load}></Nav>

            <div className="container">

                {/* <div className="d-flex align-items-center p-3 my-3 text-white bg-warning rounded shadow-sm">

                    <div className={styles.Botton}>
                        <h1 className="h6 mb-0 text-black lh-1 ">Elétrica
                        </h1>
                        <div></div>
                        <Link href="/createPost">
                            <button><a>New Post</a></button>
                        </Link>

                    </div>
                </div> */}

                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0">{search}</h6>

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
                                            <strong className="d-block text-gray-dark">{Info.name}</strong>
                                            {Info.title}

                                        </p>
                                    </a>
                                </Link>

                            </div>

                        )}

                    <small className="d-block text-end mt-3">
                        <a href="#">All updates</a>
                    </small>

                    <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>          
            </div>
            <Footer></Footer>
        </div>

    )

}

export default Eletrica