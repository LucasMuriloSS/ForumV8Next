import Nav from "./navbar";
import Image from 'next/image'
import { parseCookies } from "nookies"
import Axios from "axios";
import { Fragment, useContext, useEffect, useState, useSyncExternalStore, React ,Render} from 'react'
import { AuthContext } from '../contexts/AuthContext.tsx'
import { ErrorMessage, Formik, Form, Field, setFieldValue } from "formik";
import Upload from "./Upload"
import Router from 'next/router'

function Profile() {

    const user = useContext(AuthContext)

    const [hasupdate, sethasupdate] = useState(false);
    const [hasedit, sethasedit] = useState(false);

    const recoverUserInfomation = async (value) => {
        {console.log("Recupendo info")}

        const { 'authV8Login': token } = parseCookies()

        if (token) {

            await Axios.get('https://apicadastrologin.herokuapp.com/profile', {
                params: {
                    token: token
                }
            }).then((res) => {
                user.email = res.data.email // tem que ser user.email
                user.name = res.data.name
                user.phone = res.data.phone
                user.mobile = res.data.mobile
                user.image = res.data.image
                
                if(hasupdate){ 
                    sethasupdate(false)}
                else{
                    sethasupdate(true)}
                
                
            })
        }else{  
           Router.push('/')       
        }
    }

    useEffect(() => {
        
        recoverUserInfomation()
           
    },[hasedit])

    const SaveEdit = async (values) => {

        const { 'authV8Login': token } = parseCookies()
        
        await Axios.post('https://apicadastrologin.herokuapp.com/edit', {
            name: values.name,
            phone: values.phone,
            mobile: values.mobile,
            token: token
            
        }).then((res)=>{
            
            if(hasedit){ 
               
                sethasedit(false)}
            else{
               
                sethasedit(true)
                }
        })
       
    }

    function avatar(){

        if(user.image != null){
            const result = Buffer.from(user.image).toString('base64')
            
            return <Image src={"data:image/jpg;base64,"+result} alt="Admin" id="avatar" className="rounded-circle" width="200" height="200"></Image>
            
        }else{}
    }

    const childToParent = (childdata) =>{
        sethasedit(childdata);
    }
    
    
    
return (
        
        <div>
            {/*  */}
         {console.log("entrou na div")}  
          
   
            <Nav></Nav>
            
            <div className="container mt-3">
                <div className="main-body">

                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        {avatar()}
                                        
                                        <div className="mt-3">
                                            <h4>{user.name}</h4>
                                            <p className="text-secondary mb-1">Elétrica</p>
                                            <p className="text-muted font-size-sm">Itu-sp</p>

                                            <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#Upload" type="file">Edit Image</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <ul className="list-group list-group-flush">


                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                                        <span className="text-secondary">@bootdey</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                                        <span className="text-secondary">bootdey</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                        <span className="text-secondary">bootdey</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary" >
                                            {user.name}
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary" >
                                            {user.email}
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {user.phone}
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary" >
                                            {user.mobile}
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <button className="btn btn-info" target="__blank" data-bs-toggle="modal" data-bs-target="#Change">Edit</button>
                                        </div>
                                    </div>

                                    {/* Modal para alterar informações */}

                                    <div className="modal fade" id="Change" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Edit Informations</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <Formik
                                                        initialValues={{ name: user.name, phone: user.phone, mobile: user.mobile }}
                                                        onSubmit={SaveEdit}>

                                                        {props => (

                                                            <Form>
                                                                <Field name="name" className="form-control" placeholder="Nome completo" value={props.values.name} />
                                                                <Field name="phone" className="form-control" placeholder="Phone" value={props.values.phone} />
                                                                <Field name="mobile" className="form-control" placeholder="Mobile" value={props.values.mobile} />

                                                                <div className="modal-footer">

                                                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" >Save</button>
                                                                    
                                                                </div>
                                                            </Form>
                                                        )}
                                                    </Formik>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Modal para upload de image */}

                                    <div className="modal fade" id="Upload" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Upload Image</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                
                                                <Upload onSubmit={childToParent} ></Upload>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
        </div>

)
    

}

export default Profile

