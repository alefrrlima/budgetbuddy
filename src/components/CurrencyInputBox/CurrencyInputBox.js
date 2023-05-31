import './CurrencyInputBox.css';
import { NumericFormat } from 'react-number-format';

export default function CurrencyInputBox({
   value,
   placeholder,
   sendCurrencyValue,
}) {
   return (
      <NumericFormat
         className="currencyInputBox"
         thousandSeparator={'.'}
         decimalSeparator={','}
         value={value}
         prefix={'R$ '}
         decimalScale={2}
         fixedDecimalScale={true}
         allowNegative={false}
         onValueChange={(values) => {
            const { floatValue } = values;
            const currencyValue = floatValue;
            sendCurrencyValue(currencyValue);
         }}
         placeholder={placeholder}
      />
   );
}
