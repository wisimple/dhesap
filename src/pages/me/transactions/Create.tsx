import TransactionForm from 'components/transaction/TransactionForm';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const history = useHistory();
  return <TransactionForm onSubmitEnd={() => history.goBack()} />;
};

export default Create;
