import { ICurrency, CurrencyCodes } from 'models/Currency';

export const currencies: ICurrency[] = [
  { code: 'TRY', name: 'TRY', symbol: '₺' },
  { code: 'USD', name: 'USD', symbol: '$' },
  { code: 'EURO', name: 'EURO', symbol: '€' },
  { code: 'POUND', name: 'POUND', symbol: '£' },
  { code: 'GOLD', name: 'GOLD (1 gram)', symbol: 'G' },
  { code: 'NONE', name: 'Others', symbol: '' },
];

export const getCurrencySymbol = (code: CurrencyCodes): string | undefined =>
  currencies.find((c) => c.code === code)?.symbol;
