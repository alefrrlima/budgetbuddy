import React from 'react';
import './InputBox.css';

const InputBox = React.forwardRef((props, ref) => {
   return (
      <input
         className={`inputBox ${props.className}`}
         type={props.inputType}
         placeholder={props.inputPlaceholder}
         ref={ref}
      />
   );
});

export default InputBox;
