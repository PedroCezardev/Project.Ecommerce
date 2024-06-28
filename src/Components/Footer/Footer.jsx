import style from './Footer.module.css';
import footer_logo from '../../assets/logo.png'
import instagram_icon from '../../assets/instagram_icon.png'
import pintester_icon from '../../assets/pintester_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.footerLogo}>
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className={style.footerLinks}>
            <li>Empresa</li>
            <li>Produto</li>
            <li>Escritórios</li>
            <li>Sobre</li>
            <li>Contato</li>
        </ul>
        <div className={style.footerSocialIcon}>
            <div className={style.footerIconsContainer}>
                <img src={instagram_icon} alt="" />
            </div>
            <div className={style.footerIconsContainer}>
                <img src={pintester_icon} alt="" />
            </div>
            <div className={style.footerIconsContainer}>
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className={style.footerCopyright}>
            <hr />
            <p>Copyright @ 2024 -- Pedro Cezar</p>
        </div>
    </div>
  )
}
