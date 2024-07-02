import { useContext } from 'react';
import style from './CartItems.module.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../../assets/cart_cross_icon.png';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const CartItems = () => {

    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext); 

  return (
    <div className={style.cartItems}>
        <div className={style.cartItemsFormatMain}>
            <p>Produto</p>
            <p>Título</p>
            <p>Preço</p>
            <p>Quantidade</p>
            <p>Total</p>
            <p>Remover</p>
        </div>
        <hr />
        {all_product.map((e) => {
            if(cartItems[e.id] > 0)
            {
                return <div key={e.id}>
                    <div className={style.cartItemsFormatMain}>
                        <Link to={`/product/${e.id}`}> 
                            <img onClick={window.scrollTo(0,0)} src={e.image}  alt="" className={style.cartIconProductIcon} />
                        </Link>
                        <Link to={`/product/${e.id}`}>
                            <p>{e.name}</p>
                        </Link>
                        <p>${e.new_price}</p>
                        <button className={style.cartItemsQuantity}>{cartItems[e.id]}</button>
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <img className={style.cartItemsRemoveIcon} src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr />
            </div>
            }
            return null;
        })}

        <div className={style.cartItemsDown}>
            <div className={style.cartItemsTotal}>
                <h1>Totais do carrinho</h1>
                <div className={style.cartItemsTotalItem}>
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className={style.cartItemsTotalItem}>
                    <p>Frete Grátis</p>
                    <p>Grátis</p>
                </div>
                <hr />
                <div className={style.cartItemsTotalItem}>
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
                <button>Fazer Check-out</button>
            </div>
        </div>
        <div className={style.cartItemsPromocode}>
            <p>Se você tiver um código promocional, insira aqui</p>
            <div className={style.cartItemsPromobox}>
                <input type="text" placeholder='Código Promocional' />
                <button>Enviar</button>
            </div>
        </div>
        
    </div>
  )
}

CartItems.propTypes = {
    id: PropTypes.number.isRequired,
  };