import { Fragment } from 'react';
import Layout from './components/UI/Layout';
import ProductsTable from './components/Tables/ProductsTable';

function App() {
  return (
    <Fragment>
      <Layout>
        <ProductsTable />
      </Layout>
    </Fragment>
  );
}

export default App;
