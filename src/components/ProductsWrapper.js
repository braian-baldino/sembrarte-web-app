import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import ProductsFilterBar from './Tables/ProductsFilterBar';
import ProductsTable from './Tables/ProductsTable';

const ProductsWrapper = () => {
  const products = useSelector(state => state.product.items);

  return (
    <Fragment>
      <ProductsFilterBar />
      <ProductsTable products={products} />
    </Fragment>
  );
};

export default ProductsWrapper;
