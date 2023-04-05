import './BudgetSelector.css';

import NewBudgetButton from "../../components/NewBudgetButton/NewBudgetButton.js"
import Budget from "../../components/Budget/Budget.js"

export default function BudgetSelector() {
   return (
      <div className="budgetSelector">
         <NewBudgetButton/>
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
   );
}
