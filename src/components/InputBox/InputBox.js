import React from 'react';
import './InputBox.css';

const InputBox = React.forwardRef((props, ref) => {
   return (
      <input
         className={`inputBox ${props.className}`}
         type={props.type}
         placeholder={props.placeholder}
         onChange={props.onChange}
         value={props.valeu}
         ref={ref}
         id={props.id}
      />
   );
});

export default InputBox;
