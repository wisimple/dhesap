import React, { useEffect, useState } from 'react';

interface Props<T> {
  options: T[];
  renderItem: (item: T, index: number, selected: boolean) => React.ReactNode;
  multiple?: boolean;
  onSelected?: (selectedOptions: SelectedType) => void;
}

type SelectedType = number;

const ScrollableSelect = <T extends any>({
  options,
  renderItem,
  multiple = false,
  onSelected = () => {},
}: Props<T>) => {
  const [selectIndexes, setselectIndexes] = useState<SelectedType>(0);

  useEffect(() => {
    onSelected(0);
  }, []);

  const handleOnSelect = (i: number) => {
    let newIt: SelectedType;

    newIt = i;

    setselectIndexes(newIt);
    onSelected(newIt);
  };

  console.log('render');

  return (
    <ul className='scrollable-select'>
      {options.map((item, i) => (
        <li
          key={i}
          className={`scrollable-select__item ${selectIndexes === i ? 'selected' : ''}`}
          onClick={() => handleOnSelect(i)}>
          {renderItem(item, i, selectIndexes === i)}
        </li>
      ))}
    </ul>
  );
};

export default ScrollableSelect;
