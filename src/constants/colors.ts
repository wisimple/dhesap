export const mainColors = [
  'rgb(219,40,40)',
  'rgb(242,113,28)',
  'rgb(251,189,8)',
  'rgb(181,204,24)',
  'rgb(33,186,69)',
  'rgb(0,181,173)',
  'rgb(33,133,208)',
  'rgb(100,53,201)',
  'rgb(163,51,200)',
  'rgb(224,57,151)',
  'rgb(165,103,63)',
  'rgb(118,118,118)',
  'rgb(27,28,29)',
];

export const colors = [...mainColors].reverse();

export const backgroundColors = [...mainColors, 'rgba(0,0,0,0)'];

export const generateRandomColor = () => {
  return mainColors[4];
};
