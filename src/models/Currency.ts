export type CurrencyCodes = 'TRY' | 'USD' | 'EURO' | 'POUND' | 'GOLD' | 'NONE';

export interface ICurrency {
  code: CurrencyCodes;
  name: string;
  symbol: string;
}
