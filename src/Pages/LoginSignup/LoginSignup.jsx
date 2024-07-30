import { useState } from 'react'
import style from './Login.module.css';

export const LoginSignup = () => {
  
  const [state, setState] = useState("Entrar");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const login = async () => {
    console.log("Função Login Executada", formData);
    console.log("Função Signup Executada", formData);

    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors)
    }
  }

  const signup = async () => {
    console.log("Função Signup Executada", formData);

    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors)
    }
  }

  return (
    <div className={style.loginSignup}>
      <div className={style.loginContainer}>
        <h1>{state}</h1>
        <div className={style.loginFields}>
          { state === "Cadastre-se" ? 
            <input 
              name='username' 
              value={formData.username} 
              onChange={changeHandler} 
              type="text" 
              placeholder='Seu nome' 
            /> 
          : <></> }
          <input 
            name='email' 
            value={formData.email} 
            onChange={changeHandler}
            type="email" 
            placeholder='Endereço de E-mail' 
          />
          <input 
            name='password' 
            value={formData.password} 
            onChange={changeHandler}
            type="password" 
            placeholder='Senha' 
          />
        </div>
        <button onClick={() => {state === "Entrar" ? login():signup()}} >Continuar</button>
        {state === "Cadastre-se"
        ? <p className={style.loginSignupLogin}>Você já possui uma conta? <span onClick={() => {setState("Entrar")}}>Entre aqui</span></p>
        : <p className={style.loginSignupLogin}>Crie a sua conta aqui! <span onClick={() => {setState("Cadastre-se")}}>Click aqui</span></p>
        }
        <div className={style.loginAgree}>
          <input type="checkbox" name='' id='' />
          <p>Ao continuar, concordo com os termos de uso e política de privacidade</p>
        </div>
       </div>
    </div>
  )
}
