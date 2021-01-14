export type CurrencyCodes = 'TRY' | 'USD' | 'EURO' | 'POUND' | 'GOLD' | undefined;

export interface ICurrency {
  code: CurrencyCodes;
  name: string;
  symbol: string;
}
