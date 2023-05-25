import { useNavigate } from 'react-router-dom';

import './BudgetSelector.css';

import Budget from '../../components/Budget/Budget.js';
import Button from '../../components/Button/Button.js';

export default function BudgetSelector() {

   const navigate = useNavigate();

   function toNewBudget(e){
      e.preventDefault();
      navigate("/new-budget")
   }

   return (
      <div className="budgetSelector">
         <div className="displayBudgets">
            <Budget
               title="Orçamento Orçamento"
               value="R$ 30.000,00"
               id="#001"
            />
            <Budget 
               title="Orçamento Orçamento" 
               value="R$ 1.000,00" 
               id="#002" 
            />
            <Budget 
               title="Orçamento Orçamento" 
               value="R$ 200,00" 
               id="#003" 
            />
         </div>
         <Button 
            className="blueButton" 
            text="CRIAR ORÇAMENTO" 
            onClick={toNewBudget}
         />
      </div>
   );
}
