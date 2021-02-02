import { AccountTypes } from 'models/Account';

export const accountTypes: { value: AccountTypes; name: any; icon: string }[] = [
  { value: 'person', name: 'personAccount' as const, icon: 'account_circle' },
  { value: 'company', name: 'companyAccount' as const, icon: 'business' },
  { value: 'bank', name: 'bankAccount' as const, icon: 'account_balance' },
  { value: 'coin', name: 'coinWallet' as const, icon: 'account_balance_wallet' },
];
