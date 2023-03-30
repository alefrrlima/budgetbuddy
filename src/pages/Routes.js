import { Routes, Route } from 'react-router-dom';

import LoginPage from './LoginPage';
import SignInPage from './SignInPage';
import HomePage from './HomePage';
import NewBudgetPage from './NewBudgetPage';
import SelectedBudgetPage from './SelectedBudgetPage';

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
