import style from './Offers.module.css';
import exclusive_image from '../../assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className={style.offers}>
        <div className={style.offersLeft}>
            <h1>Exclusivo</h1>
            <h1>Ofertas Para Você</h1>
            <p>SOMENTE EM PRODUTOS MAIS VENDIDOS</p>
            <button>Veja Agora</button>
        </div>
        <div className={style.offersRight}>
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}
