import SignupPopup from '../../components/SignupPopup/SignupPopup';
import Navbar from '../../components/Navbar/Navbar';
import Filters from './Filters/Filters';
import CatalogList from './CatalogList/CatalogList';
import NewsletterSubscription from '../../components/NewsletterSubscription/NewsletterSubscription';
import Footer from '../../components/Footer/Footer';

const Catalog: React.FC = () => {
  return (
    <div className="theme-wrapper">
      <h1>I am Catalog component</h1>

      <SignupPopup />
      <Navbar />
      <Filters />
      <CatalogList />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
};

export default Catalog;
