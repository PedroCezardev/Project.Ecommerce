import style from './ShopCategory.module.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from '../../assets/dropdown_icon.png'
import Item from '../../Components/Item/Item'
import PropTypes from 'prop-types';

export const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext);

  return (
    <div className={style.shopCategory}>
      <img className={style.shopCategoryBanner} src={props.banner} alt="" />
      <div className={style.shopCategoryIndexSort}>
        <p> <span>Mostrando 1-12</span> de 36 produtos</p>
        <div className={style.shopCategorySort}>
          Ordenar por <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className={style.shopCategoryProducts}>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item 
              key={i} id={item.id} 
              name={item.name} image={item.image} 
              new_price={item.new_price} old_price={item.old_price} 
            />
          } else {
            return null;
          }
        })}
      </div>
      <div className={style.shopCategoryLoadmore}>
        Explore mais
      </div>
    </div>
  )
}

ShopCategory.propTypes = {
  category: PropTypes.string.isRequired,
  banner: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default ShopCategory