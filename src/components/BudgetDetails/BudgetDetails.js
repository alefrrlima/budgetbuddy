import './BudgetDetails.css';
import Button from '../../components/Button/Button.js';
import AlertMessage from '../../components/AlertMessage/AlertMessage.js';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BudgetDetails(props) {
   const navigate = useNavigate();
   const params = useParams();
   const user = JSON.parse(localStorage.getItem('loggedUser'));
   const loggedUser = localStorage.getItem(user.email);
   const [userData, setUserData] = useState(JSON.parse(loggedUser));
   const [userBudgets, setUserBudgets] = useState(userData.slice(1));
   const budgetID = params.budgetid;
   const currentBudget = userBudgets.find((budget) => budget.id == budgetID);

   function log(e) {
      e.preventDefault();
      console.log(currentBudget);
   }

   return (
      <>
         <div className="budgetDetails">
            <div>
               <span className="budgetTitle">{props.title}</span>
               <span className="budgetInfo">{props.addressee}</span>
               <span className="budgetInfo">{props.category}</span>
               <span className="budgetInfo">{props.value}</span>
            </div>
         </div>

         <div className="buttonsSection">
            <div>
               <Button onClick={log} text="VOLTAR" className="blueButton" />
               <Button text="EDITAR" className="blueButton" />
               <Button text="APAGAR" className="redButton" />
               <Button text="SALVAR" className="greenButton" />
            </div>
            <AlertMessage />
         </div>
      </>
   );
}
