import { useState } from 'react';
import classNames from 'classnames';

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
                        type="button"
                        className={classNames({
                           activated: category === 'Produto',
                        })}
                        onClick={() => setcategory('Produto')}
                     >
                        Produto
                     </button>
                     <button
                        type="button"
                        className={classNames({
                           activated: category === 'Serviço',
                        })}
                        onClick={() => setcategory('Serviço')}
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
