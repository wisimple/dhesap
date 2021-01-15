import { ICurrency, CurrencyCodes } from 'models/Currency';

export const currencies: ICurrency[] = [
  { code: 'TRY', name: 'TRY', symbol: '₺' },
  { code: 'USD', name: 'USD', symbol: '$' },
  { code: 'EUR', name: 'EURO', symbol: '€' },
  { code: 'GBP', name: 'POUND', symbol: '£' },
  { code: 'G', name: 'GOLD (1 gram)', symbol: 'G' },
  { code: '', name: 'Others', symbol: '' },
];

export const getCurrencySymbol = (code: CurrencyCodes | undefined): string | undefined =>
  currencies.find((c) => c.code === code)?.symbol;
