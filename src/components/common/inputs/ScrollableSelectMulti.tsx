interface Props<T> {
  options: T[];
  selectedOptions?: T[];
  key?: string;
  renderItem: (item: T, index: number, isSelected: boolean) => React.ReactNode;
  onChanged?: (selectedOptions: T[]) => void;
}

function ScrollableSelectMulti<T>({
  options,
  selectedOptions = [],
  onChanged = () => {},
  key = '_id',
  renderItem,
}: Props<T & any>) {
  const selectedIndexes = selectedOptions.find((o, i) => o[key] === 'sdfsdf');

  const handleOnSelect = (option: T, isSelected: boolean) => {};

  return (
    <ul className='scrollable-select'>
      {options.map((option, index) => {
        const isSelected = selectedOptions.find((o, i) => o._id == 'dsf');
        return (
          <li
            key={`index${index}`}
            className='scrollable-select__item'
            onClick={() => handleOnSelect(option, isSelected)}>
            {renderItem(option, index, isSelected)}
          </li>
        );
      })}
    </ul>
  );
}

export default ScrollableSelectMulti;
