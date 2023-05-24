import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import BBHorizontalLogo from '../BBHorizontalLogo/BBHorizontalLogo';

import '/PrivatePage.css';

export default function PrivatePage() {
   function toLoginPage(e) {
      e.preventDefault();
      useNavigate('/');
   }

   const loggedUser = localStorage.getItem('loggedUser');

   if (loggedUser) {
      return <div>{/* "Conteúdo da página" */}</div>;
   } else {
      return (
         <div>
            <BBHorizontalLogo />
            <h1>Ops...</h1>
            <p>
               Acredito que você não está logado, siga para a página de login
               para utilizar a aplicação.
            </p>
            <Button onClick={toLoginPage} text="PÁGINA DE LOGIN" className="blueButton"/>
         </div>
      );
   }
}
