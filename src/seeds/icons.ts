import { IIcon } from 'models';

import { icons } from 'constants/icons';
import { colors, backgroundColors } from 'constants/colors';

import { generateRandomNumber } from 'helpers';

const iconsLength = icons.length;
const colorsLength = colors.length;
const bgColorsLength = backgroundColors.length;

export const seedIcon = (): IIcon => ({
  name: icons[generateRandomNumber(iconsLength)],
  clr: colors[generateRandomNumber(colorsLength)],
  bgClr: backgroundColors[generateRandomNumber(bgColorsLength)],
});

export const seedIcons = (count: number): IIcon[] => Array(count).map(seedIcon);
