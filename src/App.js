import { useSelector } from 'react-redux';
import Layout from './components/UI/Layout';
import { BrowserRouter } from 'react-router-dom';
import RouterLinks from './components/Router/RouterLinks';
import ProductForm from './components/Forms/ProductForm';

function App() {
  const showProductForm = useSelector(state => state.ui.showProductForm);
  const showCalculateForm = useSelector(state => state.ui.showCalculateForm);

  return (
    <BrowserRouter>
      <Layout>
        <RouterLinks />
        {showProductForm && <ProductForm />}
        {showCalculateForm && <div>Formulario Aplicar Margen</div>}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
