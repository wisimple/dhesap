import AccountForm from 'components/account/AccountForm';
import { IAccount } from 'models/Account';
import { useEffect, useState } from 'react';
import { seedAccount } from 'seeds/accounts';

const Edit = () => {
  const [account, setaccount] = useState<IAccount>();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const res = seedAccount();
      setaccount(res);
      setloading(false);
    }, 300);
  }, []);
  return <AccountForm data={account} loading={loading} />;
};

export default Edit;
