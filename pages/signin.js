import styles from '../styles/signin.module.css'
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { useState } from 'react';
import {setCookie, setCookies} from 'nookies'

const { URL_API } = process.env


export default function Signin() {


  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  // const handlePasswordChange = (evnt) => {
  //   setPasswordInput(evnt.target.value);
  // }
  // const togglePassword = () => {
  //   if (passwordType === "password") {
  //     setPasswordType("text")
  //     return;
  //   }
  //   setPasswordType("password")
  // }

  const handleLogin = async (values) => {

    
    
    await Axios.post('https://apicadastrologin.herokuapp.com/login', {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.message)

      setCookie(undefined, 'authV8Login',response.data.token,{
        maxAge: 60 * 60 * 1, //1 hour
      })
    });
    
  };

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  return (
    <div >
      <div className={styles.formSignin}>
        <main className="form-signin">
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={handleLogin}
            validationSchema={validationsLogin}>

            {props => (

            <Form>
            <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
            <div className="form-floating">
              <Field name="email" className="form-control" placeholder="Email" value={props.values.email}/>
              <label htmlFor="floatingInput">Email address</label>
              <ErrorMessage
                component="span"
                name="email"
                className="form-error" />
            </div>
            <div className="form-floating">
              <Field name="password" className="form-control" placeholder="Senha" type = "password" value={props.values.password}/>
              <label htmlFor="floatingInput">Password</label>
              <ErrorMessage
                component="span"
                name="password"
                className="form-error" />
            </div>
           
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
            </Form>


            
            )}
            
          </Formik>
        </main>
      </div>
    </div>
  )
}

