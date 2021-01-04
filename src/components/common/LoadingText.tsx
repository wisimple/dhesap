import { motion } from 'framer-motion';
interface Props {
  text?: string;
}

const LoadingText: React.FC<Props> = ({ text = 'loading...' }) => {
  return (
    <motion.span className='loading-text' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {text}
    </motion.span>
  );
};

export default LoadingText;
