import './Budget.css';

import { useNavigate } from 'react-router-dom';

export default function Budget(props) {
   const navigate = useNavigate();
   const budgetid = `${props.id}`;

   function handleDetails(e) {
      e.preventDefault();
      navigate(`/details/${budgetid}`);
   }

   return (
      <div className="budget">
         <h4>{props.title}</h4>
         <span>{props.value}</span>
         <div>
            <span>{`${'# '}${props.id}`}</span>
            <button onClick={handleDetails}>DETALHES</button>
         </div>
      </div>
   );
}
