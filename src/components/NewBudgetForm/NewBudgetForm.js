import { useEffect, useState, useRef } from 'react';

import InputBox from '../../components/InputBox/InputBox.js';
import TextArea from '../../components/TextArea/TextArea.js';
import Button from '../../components/Button/Button.js';
import AlertMessage from '../../components/AlertMessage/AlertMessage.js';

import './NewBudgetForm.css';

export default function NewBudgetForm() {
   const [title, setTitle] = useState(null);
   const [addressee, setAddressee] = useState(null);
   const [category, setcategory] = useState(null);
   const [value, setValue] = useState(null);
   const [note, setNote] = useState(null);

   const productButton = useRef(null);
   const serviceButton = useRef(null);

   useEffect(() => {
      if (category == 'Service') {
         console.log('tentou adicionar a classe ao serviço');
         serviceButton.current.classList.add('active');
         productButton.current.classList.remove('active');
         return;
      }
      console.log('tentou adicionar a classe ao produto');
      productButton.current.classList.add('active');
      serviceButton.current.classList.remove('active');
   }, [category]);

   function handleSubmit(e) {
      e.preventDefault();
      console.log(category);
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
                  <div className="categorieContainer">
                     <button
                        ref={productButton}
                        type="button"
                        value={'Produto'}
                        onClick={(e) => setcategory(e.target.value)}
                     >
                        Produto
                     </button>
                     <button
                        ref={serviceButton}
                        type="button"
                        value={'Service'}
                        onClick={(e) => setcategory(e.target.value)}
                     >
                        Serviço
                     </button>
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
