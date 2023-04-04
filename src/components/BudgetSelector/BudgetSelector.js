import './BudgetSelector.css';

import new100 from '../../images/new100-icon.svg';

export default function BudgetSelector() {
   return (
      <div className="budgetSelector">
         <button>
            <svg
               width="104"
               height="104"
               viewBox="0 0 104 104"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <g clip-path="url(#clip0_27_72)">
                  <rect width="104" height="104" rx="5" fill="white" />
                  <path
                     d="M27 52.1337H77M52.0003 77V27"
                     stroke="#263238"
                     stroke-width="5"
                     stroke-linecap="round"
                  />
               </g>
               <defs>
                  <clipPath id="clip0_27_72">
                     <rect width="104" height="104" rx="5" fill="white" />
                  </clipPath>
               </defs>
            </svg>
         </button>
      </div>
   );
}
