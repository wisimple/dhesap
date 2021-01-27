interface Props<T> {
  options: T[];
  selectedIndex?: number;
  lastItem?: React.ReactNode;
  renderItem: (option: T, index: number, isSelected: boolean) => React.ReactNode;
  onChanged?: (item: T, index: number) => void;
  loading?: boolean;
}

function ScrollableSelect<T>({
  options,
  selectedIndex = 0,
  lastItem,
  renderItem,
  onChanged = () => {},
  loading,
}: Props<T>) {
  return (
    <ul className='scrollable-select'>
      {loading && <li className='scrollable-select__item'>loading...</li>}
      {options.map((option, index) => (
        <li
          key={'index' + index}
          className='scrollable-select__item'
          onClick={() => onChanged(option, index)}>
          {renderItem(option, index, selectedIndex === index)}
        </li>
      ))}
      {lastItem && <li className='scrollable-select__item'>{lastItem}</li>}
      <li className='scrollable-select__item ' style={{ width: '0.1rem', height: '1rem' }}></li>
    </ul>
  );
}

export default ScrollableSelect;
