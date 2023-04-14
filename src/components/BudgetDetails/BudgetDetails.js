import './BudgetDetails.css';
import Button from '../../components/Button/Button.js';
import AlertMessage from '../../components/AlertMessage/AlertMessage.js';

export default function BudgetDetails(props) {
   return (
      <>

      
         <div className="budgetDetails">
            <div>
               <span className="budgetTitle">Orçamento Orçamento</span>
               <span className="budgetInfo">Alexandre Ferreira Lima</span>
               <span className="budgetInfo">Serviço</span>
               <span className="budgetInfo">R$ 30.000,00</span>
            </div>
            <textarea className="budgetNote">Detalhes</textarea>
         </div>


         <div className="buttonsSection">
            <div>
               <Button text="VOLTAR" className="blueButton" />
               <Button text="EDITAR" className="blueButton" />
               <Button text="APAGAR" className="redButton" />
               <Button text="SALVAR" className="greenButton" />
            </div>
            <AlertMessage />
         </div>
      </>
   );
}
