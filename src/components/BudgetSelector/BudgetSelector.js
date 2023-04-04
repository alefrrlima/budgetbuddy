import "./BudgetSelector.css"

import new100 from "../../images/new100-icon.svg"

export default function BudgetSelector(){
   return(
      <div className="budgetSelector">
         <button>
            <img src={new100}/>
         </button>

      </div>
   )
}