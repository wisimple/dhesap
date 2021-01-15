import { AccountTypes } from 'models/Account';

export const accountTypes: { value: AccountTypes; name: string; icon: string }[] = [
  { value: 'person', name: 'Person Account', icon: 'account_circle' },
  { value: 'company', name: 'Company Account', icon: 'business' },
  { value: 'bank', name: 'Bank Account', icon: 'account_balance' },
  { value: 'coin', name: 'Coin Wallet', icon: 'account_balance_wallet' },
];
