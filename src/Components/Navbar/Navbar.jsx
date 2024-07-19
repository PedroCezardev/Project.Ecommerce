import { useContext, useRef, useState } from 'react'
import style from "./Navbar.module.css"
import { Link } from 'react-router-dom'

import logo from "../../assets/logo.png"
import cart_icon from "../../assets/cart_icon.png"
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from "../../assets/nav_dropdown.png"

const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    console.log('Dropdown toggle acionado');
    menuRef.current.classList.toggle(style.navMenuVisible);
    e.target.classList.toggle(style.open);
  }

  return (
    <div className={style.navbar}>
        <div className={style.navLogo}>
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
        <img onClick={dropdown_toggle} 
          className={style.navDropdown} 
          src={nav_dropdown} 
          alt="" 
        />
        <ul ref={menuRef} className={style.navMenu}>
          <li onClick={() => {setMenu("home")}}> <Link to='/'>Home</Link> {menu === "home" ? <hr/>: <> </> }</li>
          <li onClick={() => {setMenu("homens")}}> <Link to='/homens'>Homem</Link> {menu === "homens" ? <hr/>: <> </> }</li>
          <li onClick={() => {setMenu("mulheres")}}> <Link to='/mulheres'>Mulher</Link> {menu === "mulheres" ? <hr/>: <> </> }</li>
          <li onClick={() => {setMenu("criancas")}}> <Link to='/criancas'>Criança</Link> {menu === "criancas" ? <hr/>: <> </> }</li>
        </ul>
        <div className={style.navLoginCart}>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/cart"><img src={cart_icon} alt="" /></Link>
          <div className={style.navCartCount}>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar