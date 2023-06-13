import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './SelectedBudgetPage.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LightAside from '../../components/LightAside/LightAside.js';
import PrivatePage from '../../components/PrivatePage/PrivatePage';
import Button from '../../components/Button/Button.js';
import AlertMessage from '../../components/AlertMessage/AlertMessage.js';

export default function SelectedBudgetPage() {
   const navigate = useNavigate();
   const params = useParams();
   const user = JSON.parse(localStorage.getItem('loggedUser'));
   const loggedUser = localStorage.getItem(user.email);
   const [userData, setUserData] = useState(JSON.parse(loggedUser));
   const [userBudgets, setUserBudgets] = useState(userData.slice(1));
   const budgetID = params.budgetid;
   const currentBudget = userBudgets.find((budget) => budget.id == budgetID);
   const budgetItemList = currentBudget.itemsList;

   function log(e) {
      e.preventDefault();
      console.log(currentBudget.itemsList);
   }

   function toHomePage() {
      navigate('/home');
   }

   return (
      <PrivatePage>
         <div className="pageContainer selectedBudgetPage">
            <Header />
            <LightAside
               mainTitle={`Orçamento #0${currentBudget.id}`}
               firstParagraph="Confira em detalhes."
            />
            <div className="budgetDetails">
               <div className="budgetDetailsFrame">
                  <div className="BudgetInfoContainer">
                     <span className="budgetTitle">{currentBudget.title}</span>
                     <span className="budgetInfo">
                        {currentBudget.addressee}
                     </span>
                     <span className="budgetInfo">
                        {currentBudget.category}
                     </span>
                     <span className="budgetInfo">{currentBudget.value}</span>
                  </div>
                  <div className="BudgetItemsContainer">
                     {budgetItemList.map((item, intex) => (
                        <div key={intex} className="itemContainer">
                           <span className="itemQuantity">
                              {item.itemQuantity}
                           </span>
                           <span className="itemTitle">{item.itemName}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="buttonsSection">
               <div>
                  <Button
                     type="button"
                     onClick={toHomePage}
                     text="VOLTAR"
                     className="blueButton"
                  />
               </div>
               <AlertMessage />
            </div>
            <Footer />
         </div>
      </PrivatePage>
   );
}
