import SignupPopup from '../../components/SignupPopup/SignupPopup';
import Navbar from '../../components/Navbar/Navbar';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductTabs from './ProductTabs/ProductTabs';
import SimilarProducts from './SimilarProducts/SimilarProducts';
import NewsletterSubscription from '../../components/NewsletterSubscription/NewsletterSubscription';
import Footer from '../../components/Footer/Footer';

const ProductDetailPage: React.FC = () => {
  return (
    <div className="theme-wrapper">
      <h1>I am ProductDetailPage component</h1>
      <SignupPopup />
      <Navbar />
      <ProductInfo />
      <ProductTabs />
      <SimilarProducts />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
