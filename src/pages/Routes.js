import { Routes, Route } from 'react-router-dom';

import LoginPage from './LoginPage/LoginPage.js';
import SignInPage from './SignInPage/SignInPage.js';
import HomePage from './HomePage/HomePage.js';
import NewBudgetPage from './NewBudgetPage/NewBudgetPage.js';
import SelectedBudgetPage from './SelectedBudgetPage/SelectedBudgetPage.js';

export default function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<LoginPage />} />
         <Route path="/signin" element={<SignInPage />} />
         <Route path="/home" element={<HomePage />} />
         <Route path="/new-budget" element={<NewBudgetPage />} />
         <Route path="/selected-budget" element={<SelectedBudgetPage />} />
      </Routes>
   );
}
