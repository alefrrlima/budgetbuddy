import { useState } from 'react';

import BBVerticalLogo from '../BBVerticalLogo/BBVerticalLogo';
import InputBox from '../InputBox/InputBox';
import Button from '../Button/Button';
import AlertMessage from '../AlertMessage/AlertMessage';

import './SignInForm.css';

export default function SignInForm() {
   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [emailCheck, setEmailCheck] = useState();
   const [password, setPassword] = useState();
   const [passwordCheck, setPasswordCheck] = useState();
   const [errorMessage, setErrorMessage] = useState();

   function formValidation(e) {
      e.preventDefault();
      setErrorMessage('');
      if (!name) {
         setErrorMessage('Por favor, preencha todos os campos');
      } else if (name.length > 10) {
         setErrorMessage('Insira somente seu primeiro nome. Deve ter entre 2 e 10 caracteres, abrevie se precisar.');
      }
      if (!email) {
         setErrorMessage('Por favor, preencha todos os campos');
      } else if (!/\S+@\S+\.\S+/.test(email)) {
         setErrorMessage('Por favor, insira um email válido.');
      }

      if (!emailCheck) {
         setErrorMessage('Por favor, preencha todos os campos');
      } else if (email != emailCheck) {
         setErrorMessage('Os emails escritos não conferem, corrija antes de prosseguir');
      }

      if (!password) {
         setErrorMessage('Por favor, preencha todos os campos');
      } else if (password.length < 5 || password.length > 10) {
         setErrorMessage('Por favor, insira uma senha que tenha de 5 a 10 caracteres.');
      }

      if (!passwordCheck) {
         setErrorMessage('Por favor, preencha todos os campos');
      } else if (password != passwordCheck) {
         setErrorMessage('Os senhas escritas não conferem, corrija antes de prosseguir');
      }
   }

   function handleSubmit(e) {
      e.preventDefault();
      console.log(name, email, emailCheck, password, passwordCheck);
   }

   return (
      <div className="signInForm">
         <BBVerticalLogo />
         <form>
            <InputBox
               value={name}
               onChange={(e) => setName(e.target.value)}
               type="text"
               placeholder="Seu primeiro nome."
            />
            <InputBox
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               type="email"
               placeholder="Seu email."
            />
            <InputBox
               value={emailCheck}
               onChange={(e) => setEmailCheck(e.target.value)}
               type="email"
               placeholder="Repita seu email."
            />
            <InputBox
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               type="password"
               placeholder="Sua senha."
            />
            <InputBox
               value={passwordCheck}
               onChange={(e) => setPasswordCheck(e.target.value)}
               type="password"
               placeholder="Repita sua senha."
            />
            <Button
               onClick={formValidation}
               type="submit"
               text="CADASTRAR"
               className="blueButton"
            />
            <AlertMessage content={errorMessage} />
         </form>
      </div>
   );
}
