import { useEffect, useState } from 'react';
import classNames from 'classnames';

import InputBox from '../../components/InputBox/InputBox.js';
import TextArea from '../../components/TextArea/TextArea.js';
import Button from '../../components/Button/Button.js';
import AlertMessage from '../../components/AlertMessage/AlertMessage.js';

import CurrencyInputBox from '../CurrencyInputBox/CurrencyInputBox.js';

import './NewBudgetForm.css';

export default function NewBudgetForm() {
   const user = JSON.parse(localStorage.getItem('loggedUser'));
   const loggedUser = localStorage.getItem(user.email);
   const [userData, setUserData] = useState(JSON.parse(loggedUser));

   const [id, setId] = useState(JSON.parse(loggedUser).length);
   const [title, setTitle] = useState('');
   const [addressee, setAddressee] = useState('');
   const [category, setcategory] = useState('');
   const [value, setValue] = useState(0);
   const [note, setNote] = useState('');

   const [alertColor, setAlertColor] = useState('');
   const [alertContent, setAlertContent] = useState('');

   function getCurrencyValue(currencyValue) {
      setValue(currencyValue);
   }

   function formValidation(e) {
      e.preventDefault();
      const valueString = value.toString();
      console.log(title, addressee, value, note);
      setAlertColor('');
      setAlertContent('');

      if (!title.length || !addressee.length || !valueString.length || !note.length) {
         setAlertContent('Por favor, preenche todos os campos.');
         return;
      }

      if (!category.length) {
         setAlertContent(
            'Seu orçamento trata de um produto ou um serviço? Seleciona uma opção.'
         );
         return;
      }

      if (title.length > 15 || title.length < 2) {
         setAlertContent('O título deve de 2 a 15 caracteres.');
         return;
      }

      if (addressee.length > 15 || addressee.length < 2) {
         setAlertContent('O destinatário deve de 2 a 15 caracteres.');
         return;
      }

      if (valueString.length > 13 || valueString.length < 1 || value < 1) {
         setAlertContent(
            'Seu orçamento deve ter um valor de R$ 1,00 a R$ 1.000.000.000,00.'
         );
         return;
      }

      setAlertContent('Orçamento criado com sucesso!');
      setAlertColor('green');
   }

   function saveNewBudget(e) {
      e.preventDefault();
      setId(JSON.parse(loggedUser).length);
      setTimeout(() => {
         const newBudget = { id, title, addressee, category, value, note };
         setTimeout(() => {
            const updatedUserData = [...userData, newBudget];
            setUserData(updatedUserData);
            setTimeout(() => {
               localStorage.setItem(
                  user.email,
                  JSON.stringify(updatedUserData)
               );
            }, 300);
         }, 300);
      }, 300);
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

                  <CurrencyInputBox
                     placeholder={0}
                     sendCurrencyValue={getCurrencyValue}
                     value={value}
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
            onClick={formValidation}
         />
         <AlertMessage color={alertColor} content={alertContent} />
      </div>
   );
}
