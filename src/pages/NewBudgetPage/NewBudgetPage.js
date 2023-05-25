import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LightAside from '../../components/LightAside/LightAside';
import NewBudgetForm from '../../components/NewBudgetForm/NewBudgetForm';

import PrivatePage from '../../components/PrivatePage/PrivatePage';

import './NewBubgetPage.css';

export default function NewBubgetPage() {
   return (
      <PrivatePage>
         <div className="newBubgetPage pageContainer">
            <Header />
            <LightAside
               mainTitle="Novo Orçamento"
               firstParagraph="Adicione um título, destinatário e as demais informações."
            />
            <NewBudgetForm />
            <Footer />
         </div>
      </PrivatePage>
   );
}
