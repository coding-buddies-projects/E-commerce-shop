import Home from './pages/Home/Home';
import CartPage from './pages/CartPage/CartPage';
import Catalog from './pages/Catalog/Catalog';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

import './App.css';

function App() {
  return (
    <>
      I am the APP component. Please uncomment the PAGE COMPONENT to test the
      page you are currently working on. Default page is HOME page.
      <Home />
      {/* <CartPage />*/}
      {/*<Catalog />*/}
      {/* <ProductDetailPage />*/}
    </>
  );
}

export default App;
