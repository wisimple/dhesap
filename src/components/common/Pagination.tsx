import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

interface IProps {
  activePage?: number;
  totalPages?: number;
  onChanged?: (page: number) => void;
}

const Pagination: React.FC<IProps> = ({ activePage = 1, totalPages = 0, onChanged = () => {} }) => {
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
        {[...Array(totalPages)].map((page, i) => (
          <li
            key={i}
            onClick={() => onChanged(i + 1)}
            className={`pagination__item ${activePage === i + 1 ? 'active' : ''}`}>
            <button>{i + 1}</button>
          </li>
        ))}
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
