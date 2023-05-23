import { BrowserRouter, Link } from 'react-router-dom';

import './LoginForm.css';
import '../../styles/global.css';

import BBVerticalLogo from '../BBVerticalLogo/BBVerticalLogo.js';
import InputBox from '../InputBox/InputBox.js';
import Button from '../Button/Button.js';
import AlertMessage from '../AlertMessage/AlertMessage.js';

export default function LoginForm() {
   return (
      <div className="loginForm">
         <BBVerticalLogo />

         <form>
            <InputBox type="email" placeholder="Email." />

            <InputBox type="password" placeholder="Senha." />

            <Link to="/home">
               <Button text="LOGIN" className="blueButton" type="submit" />
            </Link>
         </form>

         <span>
            Não tem cadastro?{' '}
            <Link className="link" to="/signin">
               Registrar-se
            </Link>
         </span>

         <AlertMessage />
      </div>
   );
}
