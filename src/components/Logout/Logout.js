import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import './Logout.css';

export default function Logout() {
   const navigate = useNavigate();
   const [userName, setUserName] = useState('');
   useEffect(() => {
      const user = localStorage.getItem('loggedUser');
      setUserName(JSON.parse(user).name);
   }, []);

   function toLoginPage(e) {
      e.preventDefault();
      navigate('/');
      localStorage.removeItem('loggedUser');
   }

   return (
      <div className="logout">
         <h3>{userName}</h3>
         <button className="logoutButton" onClick={toLoginPage}>
            SAIR
         </button>
      </div>
   );
}
