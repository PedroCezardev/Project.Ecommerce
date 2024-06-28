import style from './Hero.module.css';
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'

export const Hero = () => {
  return (
    <div className={style.hero}>
        <div className={style.heroLeft}>    
            <h2>APENAS RECÉM-CHEGADOS</h2>
            <div>
                <div className={style.heroHandIcon}>
                    <p>Nova</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Coleções</p>
                <p>para todos</p>
            </div>
            <div className={style.heroLatestBtn}>
                <div>Última Coleção</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className={style.heroRight}>
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero