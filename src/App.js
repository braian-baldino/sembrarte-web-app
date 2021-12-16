import { Fragment } from 'react';
import Layout from './components/UI/Layout';
import { BrowserRouter } from 'react-router-dom';
import RouterLinks from './components/Router/RouterLinks';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <RouterLinks />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
