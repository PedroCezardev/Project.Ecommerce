import style from './Related.module.css';
import data_product from '../../assets/data';
import Item from '../Item/Item';

export const RelatedProduct = () => {
  return (
    <div className={style.relatedProduct}>
        <h1>Produtos Relacionados</h1>
        <hr />
        <div className={style.relatedProductItem}>
            {data_product.map((item, i) => {
                return <Item 
                    key={i} id={item.id} 
                    name={item.name} image={item.image} 
                    new_price={item.new_price} old_price={item.old_price}
                />
            })}
        </div>
    </div>
  )
}
