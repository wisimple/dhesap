import CategoryForm from 'components/category/CategoryForm';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const history = useHistory();
  return (
    <div>
      <CategoryForm onSubmitEnd={() => history.goBack()} />
    </div>
  );
};

export default Create;
