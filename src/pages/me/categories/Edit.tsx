import React, { useEffect, useState } from 'react';
import { seeedCategory } from 'seeds/categories';
import CategoryForm from 'components/category/CategoryForm';
import { ICategory } from 'models/Category';

const Edit = () => {
  const [category, setcategory] = useState<ICategory | undefined>();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const res = seeedCategory();
      setcategory(res);
      setloading(false);
    }, 300);
  }, []);

  return <CategoryForm data={category} loading={loading} />;
};

export default Edit;
