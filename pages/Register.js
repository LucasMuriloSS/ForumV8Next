import styles from '../styles/signin.module.css'
import Nav from "./navbar";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";

export default function Register(){

    const handleLogin = (values) => {
        Axios.post("https://testeapi01.herokuapp.com/login", {
          email: values.email,
          password: values.password,
        }).then((response) => {
          alert(response.data.msg);
          console.log(response)//adicionado por mim
        });
      };
    
      const handleRegister = (values) => {
        Axios.post("https://testeapi01.herokuapp.com/register", {
          email: values.email,
          password: values.password,
        }).then((response) => {
          // alert(response.data.msg); tirado por mim
          console.log(response);
        });
      };
    
      const validationsLogin = yup.object().shape({
        email: yup.string().email("email inválido").required("O email é obrigatório"),
        password: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres").required("A senha é obrigatória"),
      });
    
      const validationsRegister = yup.object().shape({
        email: yup
          .string()
          .email("email inválido")
          .required("O email é obrigatório"),
        password: yup
          .string()
          .min(8, "A senha deve ter pelo menos 8 caracteres")
          .required("A senha é obrigatória"),
        confirmation: yup
          .string()
          .oneOf([yup.ref("password"), null], "As senhas são diferentes")
          .required("A confirmação da senha é obrigatória"),
      });

    return(

        <div >
            
            
        
        
        <div className={styles.formSignin}>
        
        <main className="form-signin">

            <Formik
            initialValues={{}}
            onSubmit={handleRegister}
            validationSchema={validationsRegister}>
            <Form>

            <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

            <div className="form-floating">

                <Field name="email" className="form-control" placeholder="Email" />
                <label htmlFor="floatingInput">Email address</label>

                <ErrorMessage
                component="span"
                name="email"
                className="form-error"/>

            </div>
            <div className="form-floating">

                <Field name="password" className="form-control" placeholder="Senha" />
                <label htmlFor="floatingInput">Password</label>

                <ErrorMessage
                component="span"
                name="password"
                className="form-error"/>

            </div>
            <div className="form-floating">

                <Field name="confirmation" className="form-control" placeholder="Senha" />
                <label htmlFor="floatingInput">Confirm Password</label>

                <ErrorMessage
                component="span"
                name="confirmation"
                className="form-error"/>

            </div>


            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"/> Remember me 
                </label> 
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
            
            </Form>
            </Formik>



            {/*<form>
              
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"/> Remember me 
                </label> 
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
            </form>*/}

            
        </main>
        </div>
        </div>
    )
}