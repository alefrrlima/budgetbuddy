import '../../styles/global.css';
import './LoginPage.css';

import DarkAside from '../../components/DarkAside/DarkAside.js';
import LoginForm from '../../components/LoginForm/LoginForm.js';
import { useEffect } from 'react';

export default function LoginPage() {
   useEffect(() => {
      const Admin = [
         {
            name: 'admin',
            email: 'admin@admin.com.br',
            password: 'admin',
         },
      ];
      const AdminString = JSON.stringify(Admin);
      localStorage.setItem('admin@admin.com.br', AdminString);
   }, []);

   return (
      <div className="loginPage">
         <div className="whiteContainer centerContent">
            <LoginForm />
         </div>

         <DarkAside
            mainTitle="Sobre"
            firstParagraph="Criar e organizar orçamentos manualmente  é coisa do passado."
            secondParagraph="A BudgetBuddy é uma aplicação onde você pode  gerenciar seus orçamentos, de forma simples e em apenas um ambiente."
         />
      </div>
   );
}
