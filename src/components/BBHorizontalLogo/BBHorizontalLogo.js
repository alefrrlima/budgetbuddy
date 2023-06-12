import bbLogo from "../../images/bb-logo.svg"

import "./BBHorizontalLogo.css"

export default function BBHorizontalLogo(){
   return(
      <div className="bbHorizontalLogo">
         <img src={bbLogo}/>
         <h2>BudgetBuddy</h2>
      </div>
      
   )
}