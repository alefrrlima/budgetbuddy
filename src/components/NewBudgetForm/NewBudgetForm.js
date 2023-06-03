import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import InputBox from '../../components/InputBox/InputBox.js';
import Button from '../../components/Button/Button.js';
import AlertMessage from '../../components/AlertMessage/AlertMessage.js';

import CurrencyInputBox from '../CurrencyInputBox/CurrencyInputBox.js';

import './NewBudgetForm.css';

export default function NewBudgetForm() {
   const navigate = useNavigate();
   const user = JSON.parse(localStorage.getItem('loggedUser'));
   const loggedUser = localStorage.getItem(user.email);
   const [userData, setUserData] = useState(JSON.parse(loggedUser));

   const [id, setId] = useState(JSON.parse(loggedUser).length);
   const [title, setTitle] = useState('');
   const [addressee, setAddressee] = useState('');
   const [category, setcategory] = useState('');
   const [value, setValue] = useState('');
   const [itemQuantity, setItemQuantity] = useState('');
   const [itemName, setItemName] = useState('');

   const [valueString, setValueString] = useState('');

   const [alertColor, setAlertColor] = useState('');
   const [alertContent, setAlertContent] = useState('');

   useEffect(() => {
      if (typeof value == 'undefined') {
         setValueString(0);
      } else {
         setValueString(value.toString());
      }
   }, [value]);

   function handleWheel(e) {
      e.preventDefault();
   }

   function getCurrencyValue(currencyValue) {
      setValue(currencyValue);
   }

   function saveNewBudget() {
      setId(JSON.parse(loggedUser).length);
      setTimeout(() => {
         const newBudget = { id, title, addressee, category, value };
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

   function formValidation(e) {
      e.preventDefault();
      setAlertColor('');
      setAlertContent('');

      if (!title.length || !addressee.length || !valueString.length) {
         setAlertContent('Por favor, preenche todos os campos.');
         return;
      }

      if (!category.length) {
         setAlertContent(
            'O orçamento trata de um produto ou um serviço? Seleciona uma opção.'
         );
         return;
      }

      if (title.length > 25 || title.length < 2) {
         setAlertContent('O título deve de 2 a 25 caracteres.');
         return;
      }

      if (addressee.length > 25 || addressee.length < 2) {
         setAlertContent('O destinatário deve de 2 a 25 caracteres.');
         return;
      }

      if (valueString.length > 13 || valueString.length < 1 || value < 1) {
         setAlertContent(
            'O orçamento deve ter valor entre R$ 1,00 e R$ 1.000.000.000,00.'
         );
         return;
      }

      setAlertContent('Orçamento criado com sucesso!');
      setAlertColor('green');

      setTimeout(() => {
         saveNewBudget();
         setTimeout(() => {
            navigate('/home');
         }, 1000);
      }, 500);
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
                     placeholder="Valor"
                     sendCurrencyValue={getCurrencyValue}
                     value={value}
                  />
               </div>

               <div className="itemsContainer">
                  <div className='itemInput'>
                     <input
                        className="itemQuantityInput"
                        placeholder="00"
                        type="number"
                        min={1}
                        max={99}
                        maxLength={2}
                        value={itemQuantity}
                        onChange={(e) => setItemQuantity(e.target.value)}
                     />
                     <input
                        className="itemNameInput"
                        placeholder="Item"
                        type="text"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                     />
                     <button className="itemSubmitButton" onClick={''}>
                        <svg
                           width="30"
                           height="30"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M14.4913 28.5C14.0638 28.5 13.7083 28.3563 13.425 28.0688C13.1417 27.7813 13 27.425 13 27V16H2C1.575 16 1.21875 15.8554 0.93125 15.5663C0.64375 15.2771 0.5 14.9187 0.5 14.4913C0.5 14.0638 0.64375 13.7083 0.93125 13.425C1.21875 13.1417 1.575 13 2 13H13V2C13 1.575 13.1446 1.21875 13.4337 0.93125C13.7229 0.64375 14.0813 0.5 14.5087 0.5C14.9362 0.5 15.2917 0.64375 15.575 0.93125C15.8583 1.21875 16 1.575 16 2V13H27C27.425 13 27.7813 13.1446 28.0688 13.4337C28.3563 13.7229 28.5 14.0813 28.5 14.5087C28.5 14.9362 28.3563 15.2917 28.0688 15.575C27.7813 15.8583 27.425 16 27 16H16V27C16 27.425 15.8554 27.7813 15.5663 28.0688C15.2771 28.3563 14.9187 28.5 14.4913 28.5Z"
                              fill="black"
                           />
                        </svg>
                     </button>
                  </div>

                  <div className="displayedItems"></div>
               </div>
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
