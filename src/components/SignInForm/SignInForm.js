import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BBVerticalLogo from '../BBVerticalLogo/BBVerticalLogo';
import InputBox from '../InputBox/InputBox';
import Button from '../Button/Button';
import AlertMessage from '../AlertMessage/AlertMessage';
import { isEmail } from '../../helpers/validators.js';

import './SignInForm.css';

export default function SignInForm() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [emailCheck, setEmailCheck] = useState('');
   const [password, setPassword] = useState('');
   const [passwordCheck, setPasswordCheck] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
   const [errorColor, setErrorColor] = useState('');
   const navigate = useNavigate();

   function handleSubmit(e) {
      e.preventDefault();
      setErrorMessage(null);
      setErrorColor(null);

      if (
         !name.length ||
         !password.length ||
         !passwordCheck.length ||
         !email.length ||
         !emailCheck.length
      ) {
         setErrorMessage('Por favor, preencha todos os campos');
         return;
      }

      if (name.length > 10 || name.length < 2) {
         setErrorMessage(
            'Insira somente seu primeiro nome. Deve ter entre 2 e 10 caracteres, abrevie se precisar.'
         );
         return;
      }

      if (!isEmail(email)) {
         setErrorMessage('Por favor, insira um email válido.');
         return;
      }

      if (email != emailCheck) {
         setErrorMessage(
            'Os emails escritos não conferem, corrija antes de prosseguir'
         );
         return;
      }

      if (password.length < 5 || password.length > 10) {
         setErrorMessage(
            'Por favor, insira uma senha que tenha de 5 a 10 caracteres.'
         );
         return;
      }

      if (password != passwordCheck) {
         setErrorMessage(
            'Os senhas escritas não conferem, corrija antes de prosseguir'
         );
         return;
      }

      setErrorMessage('Cadastro realizado com sucesso!');
      setErrorColor('green');
      setTimeout(() => {
         const newUser = [{ name, email, password }];
         const newUserString = JSON.stringify(newUser);
         localStorage.setItem(email, newUserString);
         let user = localStorage.getItem(email);
         setTimeout(() => {
            navigate('/');
         }, 500);
      }, 500);
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
               onClick={handleSubmit}
               type="submit"
               text="CADASTRAR"
               className="blueButton"
            />
            <AlertMessage content={errorMessage} color={errorColor} />
         </form>
      </div>
   );
}
