import { useState, useEffect } from 'react';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

interface IProps {
  activePage?: number;
  totalPages?: number;
  onChanged?: (index: number) => void;
}

const Pagination: React.FC<IProps> = ({
  activePage = 1,
  totalPages = 1,
  onChanged = () => {},
}) => {
  const [selectedPage, setselectedPage] = useState(activePage);

  useEffect(() => {
    onChanged(selectedPage);
  }, [selectedPage]);

  return (
    <div className='pagination-container'>
      <ul className='pagination'>
        <li className='pagination__item'>
          <button
            onClick={() => {
              if (selectedPage > 1) setselectedPage((prev) => prev - 1);
            }}>
            <ChevronLeft />
          </button>
        </li>
        {Array.from(Array(totalPages).keys()).map((page, i) => (
          <li
            key={i}
            onClick={() => setselectedPage(i + 1)}
            className={`pagination__item ${
              selectedPage === i + 1 ? 'active' : ''
            }`}>
            <button>{i + 1}</button>
          </li>
        ))}
        <li className='pagination__item'>
          <button
            onClick={() => {
              if (totalPages > selectedPage)
                setselectedPage((prev) => prev + 1);
            }}>
            <ChevronRight />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
