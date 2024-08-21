import ProductDetails from './ProductDetails/ProductDetails';
import ProductReviews from './ProductReviews/ProductReviews';
import FAQs from './FAQs/FAQs';

const ProductTabs: React.FC = () => {
  return (
    <div className="theme-wrapper">
      <h2>I am ProductTabs component</h2>

      <ProductDetails />
      <ProductReviews />
      <FAQs />
    </div>
  );
};

export default ProductTabs;
