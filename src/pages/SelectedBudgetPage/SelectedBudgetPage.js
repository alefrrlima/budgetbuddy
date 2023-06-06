import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LightAside from '../../components/LightAside/LightAside.js';
import BudgetDetails from '../../components/BudgetDetails/BudgetDetails.js';
import PrivatePage from '../../components/PrivatePage/PrivatePage';

export default function SelectedBudgetPage() {
   return (
      <PrivatePage>
         <div className="pageContainer selectedBudgetPage">
            <Header />
            <LightAside
               mainTitle="Orçamento #000"
               firstParagraph="Confira em detalhes, edite se desejar."
            />
            <BudgetDetails
               title="Orçamento"
               addressee="Alexandre Ferreira Lima"
               category="Serviço"
               value="R$ 30.000,00"
            />
            <Footer />
         </div>
      </PrivatePage>
   );
}
