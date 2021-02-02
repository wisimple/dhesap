import { ICurrency, CurrencyCodes } from 'models/Currency';

export const currencies: ICurrency[] = [
  { code: 'TRY', name: 'TRY' as const, symbol: '₺' },
  { code: 'USD', name: 'USD' as const, symbol: '$' },
  { code: 'EUR', name: 'EURO' as const, symbol: '€' },
  { code: 'GBP', name: 'GBP' as const, symbol: '£' },
  { code: 'G', name: 'GOLD' as const, symbol: 'G' },
  { code: '', name: 'others' as const, symbol: '' },
];

export const getCurrencySymbol = (code: CurrencyCodes | undefined): string | undefined =>
  currencies.find((c) => c.code === code)?.symbol;
