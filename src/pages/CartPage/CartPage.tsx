import SignupPopup from '../../components/SignupPopup/SignupPopup';
import Navbar from '../../components/Navbar/Navbar';
import CartList from './CartList/CartList';
import OrderSummary from './OrderSummary/OrderSummary';
import NewsletterSubscription from '../../components/NewsletterSubscription/NewsletterSubscription';
import Footer from '../../components/Footer/Footer';

const CartPage: React.FC = () => {
  return (
    <div className="theme-wrapper">
      <h1>I am CartPage component</h1>
      <SignupPopup />
      <Navbar />
      <div>
        {' '}
        {/*Need to style them to be in a row*/}
        <CartList />
        <OrderSummary />
      </div>
      <NewsletterSubscription />
      <Footer />
    </div>
  );
};

export default CartPage;
