import './CurrencyInputBox.css';
import { NumericFormat } from 'react-number-format';

export default function CurrencyInputBox({ value, placeholder, sendCurrencyValue }) {
   return (
      <NumericFormat
         className="currencyInputBox"
         value={value}
         thousandSeparator={false}
         prefix={'R$ '}
         decimalScale={2}
         fixedDecimalScale={true}
         allowNegative={false}
         onValueChange={(values) => {
            const currencyValue = values.value
            sendCurrencyValue(currencyValue);
         }}
         placeholder={placeholder}
      />
   );
}
