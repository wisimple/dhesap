import { getCurrencySymbol } from 'constants/currencies';
import { formatMoney } from 'helpers';
import { CurrencyCodes } from 'models/Currency';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  amount: number;
  colored?: boolean;
  withPlus?: boolean;
  currency?: CurrencyCodes;
}

const MoneyText = (props: Props) => {
  const { amount, colored = true, withPlus, currency, ...rest } = props;
  const isPositive = amount >= 0;
  const color = colored ? `text-${isPositive ? 'green' : 'red'}` : '';
  return (
    <span className={`text-money ${color}`} {...rest}>
      {withPlus && isPositive && amount !== 0 && '+'}
      {formatMoney(amount)}
      {currency && <span>{getCurrencySymbol(currency)}</span>}
    </span>
  );
};

export default MoneyText;
