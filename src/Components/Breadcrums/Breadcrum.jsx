import style from './Breadcrum.module.css';
import arrow_icon from '../../assets/breadcrum_arrow.png';
import PropTypes from 'prop-types';

export const Breadcrum = (props) => {
    const {product} = props;

  return (
    <div className={style.breadcrum}>
        HOME <img src={arrow_icon} alt="" /> 
        SHOP <img src={arrow_icon} alt="" /> 
        {product.category} <img src={arrow_icon} alt="" />
        {product.name} 
    </div>
  )
}

Breadcrum.propTypes = {
  product: PropTypes.shape({
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
  }).isRequired
};

export default Breadcrum;