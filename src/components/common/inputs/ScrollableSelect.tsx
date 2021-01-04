import React, { useEffect, useState } from 'react';

interface Props<T> {
  options: T[];
  renderOptions: (option: T, index: number, isSelected: boolean) => React.ReactNode;
  onChanged?: ({ index, option }: { index: number; option: T }) => void;
  defaultSelectedIndex?: number;
}

const ScrollableSelect = <T extends any>({
  options,
  renderOptions,
  onChanged = () => {},
  defaultSelectedIndex = 0,
}: Props<T>) => {
  const [selectedIndex, setselectedIndex] = useState<number>(defaultSelectedIndex);

  useEffect(() => {
    onChanged({ index: selectedIndex, option: options[selectedIndex] });
  }, [selectedIndex]);

  console.log('render');

  return (
    <ul className='scrollable-select'>
      {options.map((item, i) => (
        <li
          key={i}
          className={`scrollable-select__item ${selectedIndex === i ? 'selected' : ''}`}
          onClick={() => setselectedIndex(i)}>
          {renderOptions(item, i, selectedIndex === i)}
        </li>
      ))}
    </ul>
  );
};

export default ScrollableSelect;
