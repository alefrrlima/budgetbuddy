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
         placeholder={placeholder}
         // onValueChange={(values, sourceInfo) => {
         //    console.log(values, sourceInfo);
         // }}
         onValueChange={(values) => {
            const { formattedValue } = values;
            const currencyValue = formattedValue;
            sendCurrencyValue(currencyValue);
         }}
      />
   );
}
