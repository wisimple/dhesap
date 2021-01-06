export const mainColors = [
  '#db2828',
  '#f2711c',
  '#fbbd08',
  '#b5cc18',
  '#21ba45',
  '#00b5ad',
  '#2185d0',
  '#6435c9',
  '#a333c8',
  '#e03997',
  '#a5673f',
  '#767676',
  '#1b1c1d',
];

export const colors = [...mainColors].reverse();

export const backgroundColors = [...mainColors, 'transparent'];

export const generateRandomColor = () => {
  return mainColors[4];
};
