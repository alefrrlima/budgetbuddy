// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import './App.css';

import AppRoutes from '../../pages/Routes';

export default function App() {
   return (
      <HashRouter basename="/budgetbuddy">
         <AppRoutes />
      </HashRouter>
   );
}
