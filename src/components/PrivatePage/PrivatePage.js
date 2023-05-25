import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import "./PrivatePage.css"

export default function PrivatePage({ children }) {
   const navigate = useNavigate();
   const [user, setUser] = useState(null);

   useEffect(() => {
      const loggedUser = localStorage.getItem('loggedUser');

      if (loggedUser) {
         setUser(JSON.parse(loggedUser));
      } else {
         navigate('/login');
      }
   }, []);

   if (!user) {
      return <div>Caregando...</div>;
   }

   return children;
}
