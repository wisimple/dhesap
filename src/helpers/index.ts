export const generateRandomNumber = (max: number, min: number = 0): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const formatMoney = (money: number): string => {
  return money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
