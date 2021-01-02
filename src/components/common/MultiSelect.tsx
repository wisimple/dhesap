import React from 'react';

const MultiSelect: React.FC = () => {
  return (
    <div className='multi-select-container'>
      <ul className='multi-select'>
        <li className='multi-select__item selected'>
          <button>List All</button>
        </li>
        <li className='multi-select__item'>
          <button>Incomes</button>
        </li>
        <li className='multi-select__item'>
          <button>Exprenses</button>
        </li>
        <li className='multi-select__item'>
          <button>List All</button>
        </li>
        <li className='multi-select__item'>
          <button>Incomes</button>
        </li>
        <li className='multi-select__item'>
          <button>Exprenses</button>
        </li>
        <li className='multi-select__item'>
          <button>List All</button>
        </li>
        <li className='multi-select__item'>
          <button>Incomes</button>
        </li>
        <li className='multi-select__item'>
          <button>Exprenses</button>
        </li>
      </ul>
    </div>
  );
};

export default MultiSelect;
