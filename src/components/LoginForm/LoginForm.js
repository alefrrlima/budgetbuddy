import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './LoginForm.css';
import '../../styles/global.css';

import BBVerticalLogo from '../BBVerticalLogo/BBVerticalLogo.js';
import InputBox from '../InputBox/InputBox.js';
import Button from '../Button/Button.js';
import AlertMessage from '../AlertMessage/AlertMessage.js';

export default function LoginForm() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [errorMessage, setErrorMessage] = useState(null);
   const [errorColor, setErrorColor] = useState(null);
   const navigate = useNavigate();

   function handleSubmit(e) {
      setErrorColor('');
      setErrorMessage('');
      e.preventDefault();

      const user = localStorage.getItem(email);
      const userData = user ? JSON.parse(user) : null;

      if (!password.length || !email.length) {
         setErrorMessage('Por favor, preencha todos os campos');
         return;
      }

      if (!user) {
         setErrorMessage(
            'Usuário não encontrado. Verique seus dados ou realize um cadastro'
         );
         return;
      }

      if (email != userData.email || password != userData.password) {
         setErrorMessage('Dados inválidos, verifique se os preencheu corretamente.');
         return
      }

      setErrorMessage('Login realizado com sucesso!');
      setErrorColor('green');
      setTimeout(() => {
         navigate('/home');
      }, 1000);
   }

   return (
      <div className="loginForm">
         <BBVerticalLogo />

         <form>
            <InputBox
               type="email"
               placeholder="Email."
               onChange={(e) => setEmail(e.target.value)}
            />

            <InputBox
               type="password"
               placeholder="Senha."
               onChange={(e) => setPassword(e.target.value)}
            />

            <Button
               text="LOGIN"
               className="blueButton"
               type="submit"
               onClick={handleSubmit}
            />
         </form>

         <span>
            Não tem cadastro?{' '}
            <Link className="link" to="/signin">
               Registrar-se
            </Link>
         </span>

         <AlertMessage content={errorMessage} color={errorColor} />
      </div>
   );
}
