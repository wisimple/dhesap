export type CurrencyCodes = 'TRY' | 'USD' | 'EUR' | 'GBP' | 'G' | '';

export interface ICurrency {
  code: CurrencyCodes;
  name: string;
  symbol: string;
}
