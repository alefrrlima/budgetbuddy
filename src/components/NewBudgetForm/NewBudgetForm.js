import { Link } from 'react-router-dom';
import { useState } from 'react';

import InputBox from '../../components/InputBox/InputBox.js';
import InputCheckBox from '../../components/InputCheckBox/InputCheckBox.js';
import TextArea from '../../components/TextArea/TextArea.js';
import Button from '../../components/Button/Button.js';
import AlertMessage from '../../components/AlertMessage/AlertMessage.js';

import './NewBudgetForm.css';

export default function NewBudgetForm() {
   const [title, setTitle] = useState();
   const [addressee, setAddressee] = useState();
   const [product, setProduct] = useState();
   const [service, setService] = useState();
   const [value, setValue] = useState();
   const [note, setNote] = useState();

   return (
      <div className="newBudgetFormContainer">
         <div className="newBudgetForm">
            <form>
               <div className="vContainer">
                  <InputBox type="text" placeholder="Título" />
                  <InputBox type="text" placeholder="Destinatário" />
                  <div className="checkboxContainer">
                     <InputCheckBox value="product" label="Produto" />

                     <InputCheckBox value="service" label="Serviço" />
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
