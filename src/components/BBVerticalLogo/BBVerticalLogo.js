import bblogo from '../../images/bb-logo.svg';

import "./BBVerticalLogo.css"

export default function BBVerticalLogo() {
   return (
      <div className="bbVerticalLogo">
         <div>
            <img src={bblogo} />
            <h2>BudgetBuddy</h2>
         </div>
      </div>
   );
}
