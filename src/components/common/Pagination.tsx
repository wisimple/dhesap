import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

const Pagination = () => {
  return (
    <div className='pagination-container'>
      <ul className='pagination'>
        <li className='pagination__item'>
          <button>
            <ChevronLeft />
          </button>
        </li>
        <li className='pagination__item active'>
          <button>1</button>
        </li>
        <li className='pagination__item'>
          <button>2</button>
        </li>
        <li className='pagination__item'>
          <button>3</button>
        </li>
        <li className='pagination__item'>
          <button>4</button>
        </li>
        <li className='pagination__item'>
          <button>...</button>
        </li>
        <li className='pagination__item'>
          <button>12</button>
        </li>
        <li className='pagination__item'>
          <button>
            <ChevronRight />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
