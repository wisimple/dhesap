import { getCurrencySymbol } from 'constants/currencies';
import { CurrencyCodes } from 'models/Currency';

interface Props {
  amount: number;
  colored?: boolean;
  withPlus?: boolean;
  currency?: CurrencyCodes;
  className?: string;
  styles?: React.CSSProperties;
}

const MoneyText = ({ amount, colored = true, withPlus = true, currency, className = '', styles }: Props) => {
  const isPositive = amount >= 0;
  const color = colored ? `text-${isPositive ? 'green' : 'red'}` : '';
  return (
    <span className={`text-money ${color} ${className}`} style={styles}>
      {withPlus && isPositive && amount !== 0 && '+'}
      {amount}
      {currency && <span>{getCurrencySymbol(currency)}</span>}
    </span>
  );
};

export default MoneyText;
