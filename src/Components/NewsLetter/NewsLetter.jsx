import style from './NewsLetter.module.css';

export const NewsLetter = () => {
  return (
    <div className={style.newsLetter}>
        <h1>Receba ofertas exclusivas em seu e-mail</h1>
        <p>Assine nosso newsletter e fique atualizado</p>
        <div className={style.grid}>
            <input type="email" placeholder='Your Email id' />
            <button>Inscreva-se</button>
        </div>
    </div>
  )
}
