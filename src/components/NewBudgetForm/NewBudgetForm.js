import './NewBudgetForm.css';

import InputBox from '../../components/InputBox/InputBox.js';
import InputCheckBox from '../../components/InputCheckBox/InputCheckBox.js';
import TextArea from '../../components/TextArea/TextArea.js';
import Button from '../../components/Button/Button.js';
import AlertMessage from '../../components/AlertMessage/AlertMessage.js';

import { Link } from 'react-router-dom';

export default function NewBudgetForm() {
   return (
      <div className="newBudgetFormContainer">
         <div className="newBudgetForm">
            <form>
               <div className="vContainer">
                  <InputBox type="text" placeholder="Título" />
                  <InputBox type="text" placeholder="Destinatário" />

                  <div className="checkboxContainer">
                     <InputCheckBox inputValue="product" inputLabel="Produto" />

                     <InputCheckBox inputValue="service" inputLabel="Serviço" />
                  </div>

                  <InputBox type="number" placeholder="Valor" />
               </div>

               <TextArea placeholder="Observações" textContent="" />
            </form>
         </div>
         <Link to="/home">
            <Button text="CRIAR ORÇAMENTO" className="blueButton" />
         </Link>
         <AlertMessage />
      </div>
   );
}
