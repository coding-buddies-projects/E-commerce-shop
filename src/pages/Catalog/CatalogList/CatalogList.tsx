import Pagination from './Pagination/Pagination';
import CardGrid from '../../../components/CardGrid/CardGrid';
const CatalogList: React.FC = () => {
  return (
    <div className="theme-wrapper">
      <h2>I am CatalogList component</h2>
      <CardGrid />
      <Pagination />
    </div>
  );
};

export default CatalogList;
