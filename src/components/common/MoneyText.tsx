import { getCurrencySymbol } from "constants/currencies";
import { formatMoney } from "helpers";
import { CurrencyCodes } from "models/Currency";

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  amount: number;
  colored?: boolean;
  withPlus?: boolean;
  currency?: CurrencyCodes;
  size?: "large";
}

const MoneyText = (props: Props) => {
  const { amount, colored = true, withPlus, currency, size, ...rest } = props;
  const isPositive = amount >= 0;
  const color = colored ? `text-${isPositive ? "green" : "red"}` : "";
  const sizeStyle = size ? size : "";
  return (
    <span className={`text-money ${color} ${sizeStyle}`} {...rest}>
      {withPlus && isPositive && amount !== 0 && "+"}
      {formatMoney(amount)}
      {currency && <span>{getCurrencySymbol(currency)}</span>}
    </span>
  );
};

export default MoneyText;
