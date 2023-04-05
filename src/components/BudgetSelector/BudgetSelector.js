import './BudgetSelector.css';

import NewBudgetButton from "../../components/NewBudgetButton/NewBudgetButton.js"
import Budget from "../../components/Budget/Budget.js"

export default function BudgetSelector() {
   return (
      <div className="budgetSelector">
         <NewBudgetButton/>
         <Budget/>
      </div>
   );
}
