import { useEffect, useState } from 'react';

interface Props<T> {
  options: T[];
  renderItem: (option: T, index: number, isSelected: boolean) => React.ReactNode;
  onChanged?: ({ index, selectedItem }: { index: number; selectedItem: T }) => void;
  defaultSelectedIndex?: number;
  children?: React.ReactNode;
}

const ScrollableSelect = <T extends any>({
  options,
  renderItem,
  onChanged = () => {},
  defaultSelectedIndex = 0,
  children,
}: Props<T>) => {
  const [selectedIndex, setselectedIndex] = useState<number>(defaultSelectedIndex);

  useEffect(() => {
    onChanged({ index: selectedIndex, selectedItem: options[selectedIndex] });
  }, [selectedIndex]);

  console.log('render');

  return (
    <ul className='scrollable-select'>
      {options.map((item, i) => (
        <li
          key={i}
          className={`scrollable-select__item ${selectedIndex === i ? 'selected' : ''}`}
          onClick={() => setselectedIndex(i)}>
          {renderItem(item, i, selectedIndex === i)}
        </li>
      ))}
      {children}
      <li className='scrollable-select__item ' style={{ width: '0.1rem', height: '1rem' }}></li>
    </ul>
  );
};

export default ScrollableSelect;
