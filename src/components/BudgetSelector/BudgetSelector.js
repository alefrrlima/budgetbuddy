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
   const [userBudgets, setUserBudgets] = useState(userData.slice(1));

   function toNewBudget(e) {
      e.preventDefault();
      navigate('/new-budget');
   }

   function deleteBudget(id) {
      const updatedBudgets = userBudgets.filter((budget) => budget.id != id);
      const onlyRegistryData = userData.slice(0, 1);
      const updatedUserData = [...onlyRegistryData, ...updatedBudgets];
      localStorage.setItem(user.email, JSON.stringify(updatedUserData));
      setUserData(updatedUserData)
      setUserBudgets(updatedBudgets);
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
               <>
                  {userBudgets.map((budget, index) => (
                     <Budget
                        key={budget.id}
                        title={budget.title}
                        value={budget.value}
                        id={budget.id}
                        onDelete={() => deleteBudget(`${budget.id}`)}
                     />
                  ))}
               </>
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
