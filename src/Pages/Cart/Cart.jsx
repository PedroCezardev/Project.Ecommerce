import { CartItems } from '../../Components/CartItems/CartItems';
import style from './Cart.module.css';

export const Cart = () => {
  return (
    <div className={style.cart}>
      <CartItems />
    </div>
  )
}