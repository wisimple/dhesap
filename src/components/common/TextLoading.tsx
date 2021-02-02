import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
interface Props {
  text?: string;
}

const LoadingText = ({ text }: Props) => {
  const { t } = useTranslation();
  return (
    <motion.span
      style={{ display: 'block', padding: '1rem' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      {text || t('loading')}
    </motion.span>
  );
};

export default LoadingText;
