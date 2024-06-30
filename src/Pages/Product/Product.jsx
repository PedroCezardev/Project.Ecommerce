import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import style from './Product.module.css';
import { ShopContext } from '../../Context/ShopContext';
import Breadcrum from '../../Components/Breadcrums/Breadcrum';
import { ProductDisplay } from '../../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../../Components/DescriptionBox/DescriptionBox';
import { RelatedProduct } from '../../Components/RelatedProduct/RelatedProduct';

export const Product = () => {

  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={style.product}>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
        <DescriptionBox />
        <RelatedProduct />
    </div>
  )
}

export default Product;