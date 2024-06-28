import style from './NewCollection.module.css';
import Item from '../Item/Item';
import new_collection from '../../assets/new_collections'

export const NewCollection = () => {
  return (
    <div className={style.newCollections}>
        <h1>Novas coleções</h1>
        <hr />
        <div className={style.colections}>
            {new_collection.map((item, i) => {
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
