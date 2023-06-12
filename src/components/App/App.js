import { BrowserRouter } from 'react-router-dom';

import './App.css';

import AppRoutes from '../../pages/Routes';

export default function App() {
   return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
         <AppRoutes />
      </BrowserRouter>
   );
}
