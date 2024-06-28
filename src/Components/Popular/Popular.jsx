import style from "./Popular.module.css";
import data_product from "../../assets/data"
import Item from '../Item/Item';

export const Popular = () => {
  return (
    <div className={style.popular}>
        <h1>Popular em Mulheres</h1>
        <hr />
        <div className={style.popularItem}>
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
