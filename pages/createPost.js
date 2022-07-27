import Nav from "./navbar"
import styles from '../styles/newpost.module.css'
import Image from 'next/image'
import { ErrorMessage, Formik, Form, Field, setFieldValue } from "formik";
import { parseCookies } from "nookies"
import Axios from "axios";

function Post(){


    const SavePost = async (values) => {

        const { 'authV8Login': token } = parseCookies()//verifica se existe um token com esse nome 

        await Axios.post('http://localhost:3001/CreatePost', {
            title: values.title,
            content: values.content,
            system: values.system,
            token: token
            
        }).then((res)=>{
            
        })
       
    }

    return (

    <div >

        <Nav></Nav>
        

       
        <main className="container ">
            
            <div className="d-flex align-items-center p-3 my-3 text-white bg-warning rounded shadow-sm">
            
            
            <div className="lh-1">
                <h1 className="h6 mb-0 text-black lh-1 ">Elétrica</h1>
                
            </div>
            
            </div>
            <Formik

                initialValues={{title : "",content :"",system:'eletrica'}}
                onSubmit={SavePost}>

                {props => (
                    
                    <Form>
                        <div className="article">
                            <h3>Titulo</h3>
                            <Field name="title" className={styles.Title} placeholder="Titulo" value={props.values.title}/>
                        </div>
                        <br/>
                    
                        <div><h3>Mensagem</h3></div>

                        <div >
                            <Field as='textarea' className={styles.Text} name="content" placeholder = "Leave a comment here" value={props.values.content}/>
                        </div>
                        <div>
                            <a>Postar em:</a>
                            <Field as='select' id="system" name="system" value={props.values.system} >

                                <option value="eletrica" id="system" onChange={(value)=> setFieldValue('system',value)}>Elétrica</option>
                                <option  value="Powertrain" id="system" onChange={(value)=> setFieldValue('system',value)}>PowerTrain</option>
                                
                                
                            </Field>
                         
                        </div>
                        <br/>

                        <button type="submit" className="btn btn-primary" >Save</button>
                    </Form>
                   
                )}
            
           </Formik>
           
            
	    </main>
        
       
        
        
        
    </div>
    )

}

export default Post