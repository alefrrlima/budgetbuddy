import { useRef } from 'react';

import BBVerticalLogo from '../BBVerticalLogo/BBVerticalLogo';
import InputBox from '../InputBox/InputBox';
import Button from '../Button/Button';
import AlertMessage from '../AlertMessage/AlertMessage';

import './SignInForm.css';

export default function SignInForm() {
   const name = useRef();
   const email = useRef();
   const email2 = useRef();
   const password = useRef();
   const password2 = useRef();

   function handleSubmit(e) {
      e.preventDefault();
      console.log(name, email, password);
   }

   return (
      <div className="signInForm">
         <BBVerticalLogo />
         <form>
            <InputBox
               forwardedRef={name}
               inputType="text"
               inputPlaceholder="Seu primeiro nome."
            />
            <InputBox
               forwardedRef={email}
               inputType="email"
               inputPlaceholder="Seu email."
            />
            <InputBox
               forwardedRef={email2}
               inputType="email"
               inputPlaceholder="Repita seu email."
            />
            <InputBox
               forwardedRef={password}
               inputType="password"
               inputPlaceholder="Sua senha."
            />
            <InputBox
               forwardedRef={password2}
               inputType="password"
               inputPlaceholder="Repita sua senha."
            />
            <Button
               onClick={handleSubmit}
               text="CADASTRAR"
               className="blueButton"
            />
            <AlertMessage />
         </form>
      </div>
   );
}
