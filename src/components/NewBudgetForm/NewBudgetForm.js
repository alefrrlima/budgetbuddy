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
   const [product, setProduct] = useState(false);
   const [service, setService] = useState(false);
   const [value, setValue] = useState();
   const [note, setNote] = useState();

   function handleProductCheckbox(e) {
      e.preventDefault();
      setProduct(!false);
      setService(false);
   }

   function handleServiceCheckbox(e) {
      e.preventDefault();
      setService(!false);
      setProduct(false);
   }

   function handleSubmit(e) {
      e.preventDefault();
      console.log(title, addressee, product, service, value, note);
   }

   return (
      <div className="newBudgetFormContainer">
         <div className="newBudgetForm">
            <form>
               <div className="vContainer">
                  <InputBox
                     value={title}
                     type="text"
                     placeholder="Título"
                     onChange={(e) => setTitle(e.target.value)}
                  />
                  <InputBox
                     value={addressee}
                     type="text"
                     placeholder="Destinatário"
                     onChange={(e) => setAddressee(e.target.value)}
                  />
                  <div className="checkboxContainer">
                     <InputCheckBox
                        label="Produto"
                        onClick={handleProductCheckbox}
                        checked={product}
                     />

                     <InputCheckBox
                        label="Serviço"
                        onChange={handleServiceCheckbox}
                        checked={service}
                     />
                  </div>
                  <InputBox
                     value={value}
                     type="number"
                     placeholder="Valor"
                     onChange={(e) => setValue(e.target.value)}
                  />
               </div>

               <TextArea
                  placeholder="Observações"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
               />
            </form>
         </div>
         <Button
            type="submit"
            text="CRIAR ORÇAMENTO"
            className="blueButton"
            onClick={handleSubmit}
         />
         <AlertMessage />
      </div>
   );
}
