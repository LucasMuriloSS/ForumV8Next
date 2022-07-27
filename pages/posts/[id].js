import Nav from "../navbar"
import styles from '../../styles/post.module.css'
import Image from 'next/image'
import {useRouter} from 'next/router'
import { useEffect, React,useState} from 'react'
import Axios from "axios";
import Footer from "../footer"
import { HashRouter } from 'react-router-dom'
import { parseCookies } from "nookies"
import { ErrorMessage, Formik, Form, Field, setFieldValue } from "formik";


function Post(){
    
    const router = useRouter()

    const [Post, setPost] = useState([]);
    const [load, setLoad] = useState(false)
    const [Comments, setComments] = useState([]);
    
    const {id} = router.query

    const CreateComment = async (values) => {

        const { 'authV8Login': token } = parseCookies()

        
        await Axios.post('http://localhost:3001/CreateComment',{

            token: token,
            content: values.text,
            postId:id

        }).then((res) => {
            console.log(res)
        })

    }

    const recoverPostInfomation = async (value) => {


        await Axios.get('http://localhost:3001/Post', {
            params: {
                PostId: id
            }

        }).then((res) => {

            setPost(res.data)
            setComments(res.data.comments)
            
            setLoad(true)
        })

        return

    }

    useEffect(() => {
        if(id != null){
            recoverPostInfomation()
        }


    }, [id == null])

    function avatar(buffer){
        //usado para converter o buffer da imagem para base 64 e depois mostra-lá na tela
        
        if(buffer){

        const result = Buffer.from(buffer).toString('base64')
            
        return ("data:image/jpg;base64,"+ result)
        }
            
        
    }

    function VerifyComments(){

        if (Comments != null){

            return (Comments).map((Info) => 

            <article className = {styles.article}> {/* className="article shadow-sm" */}
            <aside className = {styles.pessoa} > {/* className="pessoa" */}
                
    
                {/* <figure className = {styles.figure}> */}
                    
                    <div className = {styles.perfil}>
                        <p className = {styles.teste}>{Info.name}</p>

                        <div className = {styles.Imagem}>

                        <Image src={avatar(Info.image) || "https://bootdey.com/img/Content/avatar/avatar7.png"}
                        layout="responsive" width={200} height = {200}
                        className="rounded-circle" 
                        alt="avatar"></Image> 
                        
                        </div>
                        <div className = {styles.figurecaption} >{Info.system}</div>
                    </div>
    
            </aside>
    
            <div>
                <p>{Info.text} </p>
                <p>{"Respondido em: "+ Info.data} </p>
            </div>
            </article>
            
        )
    
        }
        
    }
    
    return (

    <div >
        
        <Nav loaded={load}></Nav>
        <main className="container ">
            
            <div className="d-flex align-items-center p-3 my-3 text-white bg-warning rounded shadow-sm">
            
            
            <div className="lh-1">
                <h1 className="h6 mb-0 text-black lh-1 ">Elétrica</h1>
                
            </div>
            </div>

            <div className="article">
                <h1>{Post.title}</h1>
            </div>

            <article className = {styles.article}> {/* className="article shadow-sm" */}
                <aside className = {styles.pessoa} > {/* className="pessoa" */}
                    
        
                    {/* <figure className = {styles.figure}> */}
                        
                        <div className = {styles.perfil}>
                            <p className = {styles.teste}>{Post.name}</p>

                            <div className = {styles.Imagem}>

                            <Image src={avatar(Post.image) || "https://bootdey.com/img/Content/avatar/avatar7.png"}
                            layout="responsive" width={200} height = {200}
                            className="rounded-circle" 
                            alt="avatar"></Image> 
                            
                            </div>
                            <div className = {styles.figurecaption} >{Post.system}</div>
                        </div>
        
                </aside>
        
                <div>
                    <p>{Post.message}</p>
                    <p>{"Postado em: "+ Post.data} </p>
                </div>
            </article>

            <div className="d-flex align-items-center p-3 my-3 text-white bg-Light rounded shadow-sm">
                <div className="lh-1">  
                    <a className="w-100 btn btn-lg btn-primary" href="#scroll-1">Responder</a>
                </div>
            </div>
            
            {VerifyComments()}
          
            <Formik

            initialValues={{text : ""}}
            onSubmit={CreateComment}>

            {props => (


                <Form>
                    <div className="form-floating" >
                    <Field as="textarea" className="form-control" id="floatingTextarea2" name = "text"  value={props.values.text}></Field>
                    {/* <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea> */}
                    <label htmlFor="floatingTextarea2" id="scroll-1">Comments</label>    
                    </div>
                    <button type="submit" className="btn btn-primary" >Save</button>
                </Form>
                

            )}
            
            </Formik>

	    </main>
        <Footer></Footer>
        
        
    </div>
    )
    
}


export default Post