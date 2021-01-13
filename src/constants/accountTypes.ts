import { AccountTypes } from 'models/Account';

export const accountTypes: { type: AccountTypes; name: string; icon: string }[] = [
  { type: 'person', name: 'Person Account', icon: 'account_circle' },
  { type: 'company', name: 'Company Account', icon: 'business' },
  { type: 'bank', name: 'Bank Account', icon: 'account_balance' },
  { type: 'coin', name: 'Coin Wallet', icon: 'account_balance_wallet' },
];
