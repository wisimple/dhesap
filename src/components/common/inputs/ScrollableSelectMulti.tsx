interface Props<T> {
  options: T[];
  selectedIds?: string[];
  key?: string;
  renderItem: (item: T, index: number, isSelected: boolean) => React.ReactNode;
  onChanged?: (selectedIds: string[]) => void;
}

function ScrollableSelectMulti<T>({
  options,
  selectedIds = [],
  onChanged = () => {},
  key = '_id',
  renderItem,
}: Props<T & any>) {
  const handleOnSelect = (option: T & any, isSelected: boolean) => {
    let newState = [];
    if (isSelected) {
      newState = selectedIds.filter((c) => c !== option[key]);
    } else {
      newState = [...selectedIds, option[key]];
    }

    onChanged(newState);
  };

  return (
    <ul className='scrollable-select'>
      {options.map((option, index) => {
        const isSelected = selectedIds.includes(option[key]);
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
