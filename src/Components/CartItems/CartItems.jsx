import { useContext } from 'react';
import style from './CartItems.module.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../../assets/cart_cross_icon.png';
import { Link } from "react-router-dom";
import PropTypes, { object } from 'prop-types';

export const CartItems = () => {

    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext); 

    const handleCheckout = async () => {
        try {

            const items = Object.keys(cartItems)
                .filter(itemId => cartItems[itemId] > 0) // Filtrar itens com quantidade maior que 0
                .map(itemId => {
                    const product = all_product.find(product => product.id === Number(itemId));
                    if (!product) {
                        console.error(`Product with ID ${itemId} not found.`);
                        return null;
                    }
                    return {
                        id: itemId,
                        name: product.name,
                        price: product.new_price,
                        quantity: cartItems[itemId],
                    };
                })
                .filter(item => item !== null); // Filtrar itens inválidos

            if (items.length === 0) {
                console.error('No valid items for checkout.');
                return;
            }

            const response = await fetch('http://localhost:4000/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({items}),
            });
            const data = await response.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error('Error during checkout:', data);
            }
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    

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
                            <img onClick={window.scrollTo(0,0)} 
                                src={e.image}  
                                alt="" 
                                className={style.cartIconProductIcon} 
                            />
                        </Link>
                        <Link to={`/product/${e.id}`}>
                            <p>{e.name}</p>
                        </Link>
                        <p>${e.new_price}</p>
                        <button className={style.cartItemsQuantity}>{cartItems[e.id]}</button>
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <img className={style.cartItemsRemoveIcon} 
                            src={remove_icon} 
                            onClick={() => {removeFromCart(e.id)}} 
                            alt="" 
                        />
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
                
                <button onClick={handleCheckout}>Fazer Check-out</button>
                
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