import { useEffect, useState, useRef } from 'react';

import InputBox from '../../components/InputBox/InputBox.js';
import TextArea from '../../components/TextArea/TextArea.js';
import Button from '../../components/Button/Button.js';
import AlertMessage from '../../components/AlertMessage/AlertMessage.js';

import './NewBudgetForm.css';

export default function NewBudgetForm() {
   const [title, setTitle] = useState(undefined);
   const [addressee, setAddressee] = useState(undefined);
   const [category, setcategory] = useState(undefined);
   const [value, setValue] = useState(undefined);
   const [note, setNote] = useState(undefined);

   const productButton = useRef(undefined);
   const serviceButton = useRef(undefined);

   useEffect(() => {
      const activatedButton = document.querySelectorAll('active');
      activatedButton.forEach((element) => {
         element.current.classList.remove('active');
      });
      if (category == 'Produto') {
         console.log('Chegou a condição do produto!');
         productButton.current.classList.add('active');
      }
      else if (category == 'Serviço') {
         console.log('Chegou a condição do serviço!');
         serviceButton.current.classList.add('active');
         return;
      }
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
                        value={'Serviço'}
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
