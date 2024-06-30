import style from './Product.module.css';
import PropTypes from 'prop-types';
import star_icon from '../../assets/star_icon.png';
import star_dull_icon from '../../assets/star_dull_icon.png';

export const ProductDisplay = (props) => {

    const {product} = props;

  return (
    <div className={style.productDisplay}>
        <div className={style.productDisplayLeft}>
            <div className={style.productImgList}>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className={style.productImg}>
                <img className={style.productMainImg} src={product.image} alt="" />
            </div>
        </div>
        <div className={style.productDisplayRight}>
            <h1>{product.name}</h1>
            <div className={style.productDisplayRightStar}>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className={style.productRightPrices}>
                <div className={style.productRightPriceOld}>
                    ${product.old_price}
                </div>
                <div className={style.productRightNewPrice}>
                    ${product.new_price}
                </div>
                <div className={style.productRightDescription}>
                    Uma camisa pulôver leve e malha, justa e com decote 
                    redondo e mangas curtas, indicada como camiseta ou vestimenta externa.
                </div>
                <div className={style.productRightSize}>
                    <h1>Selecione o tamanho</h1>
                    <div className={style.productRightSizes}>
                        <div>PP</div>
                        <div>P</div>
                        <div>M</div>
                        <div>G</div>
                        <div>GG</div>
                    </div>
                </div>
                <button>Adicionar ao Carrinho</button>
                <p className={style.productRightCategory}> 
                    <span>Categoria : </span> 
                    Mulheres, Top curto, Camiseta 
                </p>
                <p className={style.productRightCategory}> 
                    <span>Tags : </span> 
                    Moderno, Mais recente
                </p>
            </div>
        </div>
    </div>
  );
};

ProductDisplay.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        old_price: PropTypes.number.isRequired,
        new_price: PropTypes.number.isRequired,
    }).isRequired,
};