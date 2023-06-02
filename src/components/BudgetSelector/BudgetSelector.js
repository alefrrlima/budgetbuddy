import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './BudgetSelector.css';

import Budget from '../../components/Budget/Budget.js';
import Button from '../../components/Button/Button.js';

export default function BudgetSelector() {
   const navigate = useNavigate();
   const user = JSON.parse(localStorage.getItem('loggedUser'));
   const loggedUser = localStorage.getItem(user.email);
   const [userData, setUserData] = useState(JSON.parse(loggedUser));

   function toNewBudget(e) {
      e.preventDefault();
      navigate('/new-budget');
   }

   return (
      <div className="budgetSelector">
         <div className="displayBudgets">
            {userData.length == 1 && (
               <p className="noBudgetMessage">
                  Nenhum orçamento encontrado, experimente criar um novo.
               </p>
            )}

            {userData.length > 1 && (
               <Budget
                  title="Orçamento Orçamento"
                  value="R$ 30.000,00"
                  id="#001"
               />
            )}
         </div>
         <Button
            className="blueButton"
            text="CRIAR ORÇAMENTO"
            onClick={toNewBudget}
         />
      </div>
   );
}
