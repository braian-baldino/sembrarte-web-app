import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tableActions } from '../store/tableReducer';
import ProductsFilterBar from './Tables/ProductsFilterBar';
import ProductsTable from './Tables/ProductsTable';

const ProductsWrapper = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.items);
  const filteredProducts = useSelector(state => state.table.filteredProducts);

  useEffect(() => {
    dispatch(tableActions.setFilteredProducts({ products }));
    console.log('ProductsWrapper: useEffect');
  }, [products]);

  return (
    <Fragment>
      <ProductsFilterBar />
      <ProductsTable products={filteredProducts} />
    </Fragment>
  );
};

export default ProductsWrapper;
