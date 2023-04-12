import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LightAside from '../../components/LightAside/LightAside.js';
import BudgetDetails from '../../components/BudgetDetails/BudgetDetails.js';

export default function SelectedBudgetPage() {
   return (
      <div className="pageContainer selectedBudgetPage">
         <Header />
         <LightAside
            mainTitle="Orçamento #000"
            firstParagraph="Confira em detalhes, edite se desejar."
         />
         <BudgetDetails
            budgetTitle="Orçamento"
            budgetAddressee="Alexandre Ferreira Lima"
            budgetCategory="Serviço"
            budgetValue="R$ 30.000,00"
            budgetNote="Oi"
         />
         <Footer />
      </div>
   );
}
