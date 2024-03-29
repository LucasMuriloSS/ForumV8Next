import Signin from "./signin"
import Register from "./Register"
import Link from 'next/link'
import { parseCookies } from "nookies"
import Axios from "axios";
import { Fragment, useContext, useEffect, useState, useSyncExternalStore, React ,Render} from 'react'

function Nav({loaded}){

    const [notifications,setnotifications] = useState([]);
    const [searchInfo,setsearch] = useState('');

    var marca = 'casa'

    function Open(){

    return(
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
        )

    }
 
    const getnotifications = async (values) => {
    const { 'authV8Login': token } = parseCookies()

    if(token && loaded == true){


        await Axios.get('http://localhost:3001/notifications',{
            params:{
                token:token
            }
        }).then((res)=> {

            setnotifications(res.data)
    
        })
    }

    return

   }

   const deletenotifications = async (values) => {

    const { 'authV8Login': token } = parseCookies()

    if(token){

        await Axios.post('http://localhost:3001/delnotifications',{
            token:token,
            id:values
        })

    }

   }

    useEffect(() => {

        getnotifications()
     
    },[loaded == false])

    const handleChange = event => {
        
        setsearch(event.target.value)

    };


    return(

    <div >
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
            <div className="container-fluid">

            <Link href="/">
            
            <a className="navbar-brand" >V8 Racing Forum</a>
            </Link>

            <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation" onClick={Open}>
                <span className="navbar-toggler-icon" ></span>
            </button>
        
            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link href="/">
                <li className="nav-item">
                    <a type="button" className="nav-link active" aria-current="page" >Main Page</a>
                </li>
                </Link>
                
                
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Notifications</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown01">

                    {notifications.map((Info) =>

                    <li><a className="dropdown-item" href={"http://localhost:3000/posts/"+Info.postID} onClick={()=> deletenotifications(Info._id)} >{Info.text}</a></li>

                    )}
                    
                    </ul>
                </li>
                
                
                <Link href="/profile">
                <li className="nav-item">
                    <a type="button" className="nav-link" >Profile</a>
                    
                </li>
                </Link>
                
                <Link href="#">
                <li className="nav-item" >

                    <a type="button" className="nav-link" data-bs-toggle="modal" data-bs-target="#Login">Login/Register</a>
                    
                </li>
                </Link>
                
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown01">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                </ul>
                <form className="d-flex">
                <input className="form-control me-2" type="search" id='search' onChange={handleChange} value={searchInfo} placeholder="Search" aria-label="Search"></input>
                {/* onChange={handleChange} value={searchInfo}  */}
                <Link href={'/search/'+ searchInfo}>

                <button className="btn btn-outline-success" type="submit">Search</button>
                </Link>
                
                </form>
            </div>

            </div>
	    </nav>

        {/* Login Modal */}
                <div className="modal fade" id="Login" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Signin></Signin>
                    </div>
                    <div className="modal-footer">

        
                        {/* <button type="button" className="btn btn-primary" data-bs-target="#Register">Register</button> */}
                        <a type="button" className="nav-link" data-bs-toggle="modal" data-bs-target="#Register">Register</a>
                       
                        
                    </div>
                    </div>
                </div>
                </div>

        {/* Register Modal */}
        <div className="modal fade" id="Register" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Register></Register>
                    </div>
                    <div className="modal-footer">
    
                        {/* <button type="button" className="btn btn-primary" data-bs-target="#exampleModal">Login</button> */}
                        <a type="button" className="nav-link" data-bs-toggle="modal" data-bs-target="#Login">Login</a>
                       
                    </div>
                    </div>
                </div>
                </div>
                
      <div  className="nav-scroller bg-body shadow-sm">
        <nav className="nav nav-underline" aria-label="Secondary navigation">
            <a className="nav-link active" aria-current="page" href="#">Avisos
            </a>
            <a className="nav-link" href="#">
            Amigos
            <span className="badge bg-light text-dark rounded-pill align-text-bottom">27</span>
            </a>
            
            <Link href="/eletrica"><a className="nav-link">Elétrica</a></Link>
            {/* <Link href=""><a className="nav-link">PowerTrain</a></Link>
            <Link href=""><a className="nav-link">Aerodinâmica</a></Link>
            <Link href=""><a className="nav-link">Subsistema</a></Link>
            <Link href=""><a className="nav-link">Subsistema</a></Link>
            <Link href=""><a className="nav-link">Subsistema</a></Link>
            <Link href=""><a className="nav-link">Subsistema</a></Link> */}
        </nav>
      </div>
    </div>

    )
}

export default Nav