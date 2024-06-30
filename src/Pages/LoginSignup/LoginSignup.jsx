import style from './Login.module.css';

export const LoginSignup = () => {
  return (
    <div className={style.loginSignup}>
      <div className={style.loginContainer}>
        <h1>Cadastre-se</h1>
        <div className={style.loginFields}>
          <input type="text" placeholder='Seu nome' />
          <input type="email" placeholder='Endereço de E-mail' />
          <input type="password" placeholder='Senha' />
        </div>
        <button>Continuar</button>
        <p className={style.loginSignupLogin}>Você jpa possui uma conta? <span>Entre aqui</span></p>
        <div className={style.loginAgree}>
          <input type="checkbox" name='' id='' />
          <p>Ao continuar, concordo com os termos de uso e política de privacidade</p>
        </div>
       </div>
    </div>
  )
}
