import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

interface IProps {
  activePage?: number;
  totalPages?: number;
  loading?: boolean;
  onChanged?: (page: number) => void;
}

const Pagination: React.FC<IProps> = ({ activePage = 1, totalPages = 0, loading, onChanged = () => {} }) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className='pagination-container'>
      <ul className='pagination'>
        <li className='pagination__item'>
          <button
            onClick={() => {
              if (activePage > 1) onChanged(activePage - 1);
            }}>
            <ChevronLeft />
          </button>
        </li>
        {[...Array(totalPages)].map((page, i) => {
          const isActive = activePage === i + 1;
          return (
            <li
              key={i}
              onClick={() => onChanged(i + 1)}
              className={`pagination__item ${isActive ? 'active' : ''}`}>
              <button>{isActive && loading ? '..' : i + 1}</button>
            </li>
          );
        })}
        <li className='pagination__item'>
          <button
            onClick={() => {
              if (totalPages > activePage) onChanged(activePage + 1);
            }}>
            <ChevronRight />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
