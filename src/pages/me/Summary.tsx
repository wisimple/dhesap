import { useTranslation } from 'react-i18next';

const Summary = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('summary')}</h1>
    </div>
  );
};

export default Summary;
