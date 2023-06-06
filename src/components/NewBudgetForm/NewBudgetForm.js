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
   const [itemsList, setItemsList] = useState([]);

   const [alertColor, setAlertColor] = useState('');
   const [alertContent, setAlertContent] = useState('');

   function addNewItem() {
      const newItem = { itemQuantity, itemName };
      if (itemsList == []) {
         setItemsList([newItem]);
      } else {
         setItemsList([...itemsList, newItem]);
      }
      setItemQuantity('');
      setItemName('');
   }

   function deleteItem(index) {
      const updatedList = [...itemsList];
      updatedList.splice(index, 1);
      setItemsList(updatedList);
   }

   function handleItemSubmit(e) {
      e.preventDefault();
      setAlertContent('');

      if (itemsList.length == 5) {
         setAlertContent('Você pode adicionar até 5 itens ao seu orçamento.');
         return;
      }

      if (!itemName.length || !itemQuantity.length) {
         setAlertContent(
            'Por favor, preencha a quantidade e o nome do item que deseja adicionar.'
         );
         return;
      }

      if (!itemQuantity.length || itemQuantity < 1) {
         setAlertContent('Adicione ao menos 1 unidade ao seu item.');
         return;
      }

      if (itemQuantity > 99) {
         setAlertContent('Limite a quantidade do seu item em 99 unidades.');
         return;
      }

      if (itemName.length > 20) {
         setAlertContent(
            'O nome do seu item deve ter no máximo 20 caracteres.'
         );
         return;
      }
      addNewItem();
   }

   function getCurrencyValue(currencyValue) {
      setValue(currencyValue);
   }

   function saveNewBudget() {
      setId(JSON.parse(loggedUser).length);
      setTimeout(() => {
         const newBudget = { id, title, addressee, category, value, itemsList };
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

   function handleFormSubmit(e) {
      e.preventDefault();
      setAlertColor('');
      setAlertContent('');

      if (!title.length || !addressee.length || !value.length) {
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

      if (value.length > 19 || value.length < 1 || value < 1) {
         setAlertContent(
            'O orçamento deve ter valor entre R$ 1,00 e R$ 1.000.000.000,00.'
         );
         return;
      }

      if (!itemsList.length) {
         setAlertContent('Adicione ao menos um item ao seu orçamento.');
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
                  <div className="itemInput">
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
                     <button
                        className="itemSubmitButton"
                        onClick={handleItemSubmit}
                     >
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

                  <div className="displayedItems">
                     {itemsList.map((item, index) => (
                        <div key={index} className="displayedItem">
                           <span className="displayedItemQuantity">
                              {item.itemQuantity}
                           </span>
                           <span className="displayedItemName">
                              {item.itemName}
                           </span>
                           <button
                              type="button"
                              className="trashButton"
                              onClick={() => deleteItem(index)}
                           >
                              <svg
                                 width="14"
                                 height="15"
                                 viewBox="0 0 14 15"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M2.10417 15C1.77083 15 1.47917 14.875 1.22917 14.625C0.979167 14.375 0.854167 14.0833 0.854167 13.75V1.875H0.625C0.447917 1.875 0.299479 1.81476 0.179687 1.69427C0.0598958 1.57377 0 1.42447 0 1.24635C0 1.06823 0.0598958 0.920139 0.179687 0.802083C0.299479 0.684028 0.447917 0.625 0.625 0.625H3.91667C3.91667 0.444444 3.97656 0.295139 4.09635 0.177083C4.21615 0.0590278 4.36458 0 4.54167 0H8.79167C8.96875 0 9.11719 0.0598958 9.23698 0.179687C9.35677 0.299479 9.41667 0.447917 9.41667 0.625H12.7083C12.8854 0.625 13.0339 0.685243 13.1536 0.805729C13.2734 0.926229 13.3333 1.07553 13.3333 1.25365C13.3333 1.43177 13.2734 1.57986 13.1536 1.69792C13.0339 1.81597 12.8854 1.875 12.7083 1.875H12.4792V13.75C12.4792 14.0833 12.3542 14.375 12.1042 14.625C11.8542 14.875 11.5625 15 11.2292 15H2.10417ZM2.10417 1.875V13.75H11.2292V1.875H2.10417ZM4.3125 11.3333C4.3125 11.5104 4.37274 11.6589 4.49323 11.7786C4.61373 11.8984 4.76303 11.9583 4.94115 11.9583C5.11927 11.9583 5.26736 11.8984 5.38542 11.7786C5.50347 11.6589 5.5625 11.5104 5.5625 11.3333V4.27083C5.5625 4.09375 5.50226 3.94531 5.38177 3.82552C5.26127 3.70573 5.11197 3.64583 4.93385 3.64583C4.75573 3.64583 4.60764 3.70573 4.48958 3.82552C4.37153 3.94531 4.3125 4.09375 4.3125 4.27083V11.3333ZM7.77083 11.3333C7.77083 11.5104 7.83108 11.6589 7.95156 11.7786C8.07206 11.8984 8.22137 11.9583 8.39948 11.9583C8.5776 11.9583 8.72569 11.8984 8.84375 11.7786C8.96181 11.6589 9.02083 11.5104 9.02083 11.3333V4.27083C9.02083 4.09375 8.96059 3.94531 8.8401 3.82552C8.7196 3.70573 8.5703 3.64583 8.39219 3.64583C8.21406 3.64583 8.06597 3.70573 7.94792 3.82552C7.82986 3.94531 7.77083 4.09375 7.77083 4.27083V11.3333Z" />
                              </svg>
                           </button>
                        </div>
                     ))}
                  </div>
               </div>
            </form>
         </div>
         <Button
            type="submit"
            text="CRIAR ORÇAMENTO"
            className="blueButton"
            onClick={handleFormSubmit}            
         />
         <AlertMessage color={alertColor} content={alertContent} />
      </div>
   );
}
