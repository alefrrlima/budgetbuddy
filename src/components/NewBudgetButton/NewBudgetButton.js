import { Link } from "react-router-dom"

import "./NewBudgetButton.css"

export default function NewBudgetButton(){
   return(
      <Link to="/new-budget" className="newBudgetButton">
         <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 28.1337H53M28.0003 53V3" stroke-width="5" stroke-linecap="round"/>
         </svg>
      </Link>
   )
}