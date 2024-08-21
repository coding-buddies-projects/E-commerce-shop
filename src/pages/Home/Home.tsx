import SignupPopup from '../../components/SignupPopup/SignupPopup';
import Navbar from '../../components/Navbar/Navbar';
import Header from './Header/Header';
import NewArrivals from './NewArrivals/NewArrivals';
import TopSelling from './TopSelling/TopSelling';
import BrowseByStyle from './BrowseByStyle/BrowseByStyle';
import HomeReviews from './HomeReviews/HomeReviews';
import NewsletterSubscription from '../../components/NewsletterSubscription/NewsletterSubscription';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <div className="theme-wrapper">
      <h1>I am HOME component</h1>
      <SignupPopup />
      <Navbar />
      <Header />
      <NewArrivals />
      <TopSelling />
      <BrowseByStyle />
      <HomeReviews />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
};

export default Home;
