import './CurrencyInputBox.css';
import { NumericFormat } from 'react-number-format';

export default function CurrencyInputBox({ value, placeholder, onChange}) {
   return (
      <NumericFormat
         className='currencyInputBox'
         value={value}
         thousandSeparator={false}
         prefix={'R$ '}
         decimalScale={2}
         fixedDecimalScale={true}
         allowNegative={false}
         onValueChange={(values) => {
            console.log(values.value);
         }}
         placeholder={placeholder}
         onChange={onChange}
      />
   );
}
