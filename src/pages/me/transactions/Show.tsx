import { ITransaction } from 'models/Transaction';
import { useEffect, useState } from 'react';
import { seedTransaction } from 'seeds/transactions';

const Show = () => {
  const [transaction, settransaction] = useState<ITransaction>();

  useEffect(() => {
    setTimeout(() => {
      const res = seedTransaction();
      settransaction(res);
    }, 300);
  }, []);
  return (
    <div>
      <h3>{transaction?._id}</h3>
      <pre>{JSON.stringify(transaction, null, 2)}</pre>
    </div>
  );
};

export default Show;
