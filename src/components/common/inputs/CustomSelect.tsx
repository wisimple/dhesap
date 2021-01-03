import React, { useEffect, useState } from 'react';
import Check from '@material-ui/icons/Check';
interface Props {
  items: string[];
  onSelect: (item: string) => void;
}

interface ItemProps {
  name: string;
  selected?: boolean;
}

const CustomSelect: React.FC<Props> = ({ items, onSelect }) => {
  const [itemsState, setitemsState] = useState<ItemProps[]>([]);

  useEffect(() => {
    setitemsState(
      items.map((item, i) => (i !== 0 ? { name: item } : { name: item, selected: true }))
    );
  }, [items]);

  const selectItem = (index: number) => {
    setitemsState((prev) =>
      prev.map((item, i) =>
        index === i ? { ...item, selected: true } : { ...item, selected: false }
      )
    );
    onSelect(itemsState[index].name);
  };

  console.log('render');

  return (
    <ul className='input--custom-select' id='color'>
      {itemsState.map((item, i) => (
        <li
          key={i}
          className={`input--custom-select__item ${item.selected ? 'selected' : ''}`}
          style={{ backgroundColor: item.name }}
          onClick={() => selectItem(i)}>
          {item.selected && <Check />}
        </li>
      ))}
    </ul>
  );
};

export default CustomSelect;
