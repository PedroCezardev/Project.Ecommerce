import style from "./Item.module.css";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export const Item = (props) => {
  return (
    <div className={style.item}>
        <Link to={`/product/${props.id}`}> 
          <img onClick={window.scrollTo(0,0)} src={props.image} alt=""/> 
        </Link>
        <p>{props.name}</p>
        <div className={style.itemPrices}>
            <div className={style.itemPriceNew}>
                ${props.new_price}
            </div>
            <div className={style.itemPriceOld}>
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

Item.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    new_price: PropTypes.number.isRequired,
    old_price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  };

export default Item;