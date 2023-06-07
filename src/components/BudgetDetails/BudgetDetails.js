import './BudgetDetails.css';
import Button from '../../components/Button/Button.js';
import AlertMessage from '../../components/AlertMessage/AlertMessage.js';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BudgetDetails(props) {

   return (
      <>
         <div className="budgetDetails">
            <div>
               <span className="budgetTitle">{props.title}</span>
               <span className="budgetInfo">{props.addressee}</span>
               <span className="budgetInfo">{props.category}</span>
               <span className="budgetInfo">{props.value}</span>
            </div>
         </div>

         <div className="buttonsSection">
            <div>
               <Button type="button" onClick={props.onClickReturn} text="VOLTAR" className="blueButton" />
               <Button type="button" onClick={props.onClickDelete} text="APAGAR" className="redButton" />
            </div>
            <AlertMessage />
         </div>
      </>
   );
}
