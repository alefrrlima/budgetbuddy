import "./BudgetDetails.css"

export default function BudgetDetails(props){
   return(
      <div className="budgetDetails">
         <div>
            <span className="budgetTitle">{props.budgetTitle}</span>
            <span className="budgetDetails">{props.budgetAddressee}</span>
            <span className="budgetDetails">{props.budgetCategory}</span>
            <span className="budgetDetails">{props.budgetValue}</span>
         </div>
         <span className="budgetNote">{props.budgetNote}</span>
      </div>
   )
}