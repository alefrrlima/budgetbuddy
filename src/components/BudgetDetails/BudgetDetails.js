import './BudgetDetails.css';

export default function BudgetDetails(props) {
   return (
      <div className="budgetDetails">
         <div>
            <span className='budgetTitle'>Orçamento Orçamento</span>
            <span className=''>Alexandre Ferreira Lima</span>
            <span className=''>Serviço</span>
            <span className=''>R$ 30.000,00</span>
         </div>
         <span className="budgetNote">Detalhes</span>
      </div>
   );
}
