import { Link } from 'react-router-dom';

import './Logout.css';

import logoutIcon from '../../images/logout-icon.svg';

export default function Logout() {
   return (
      <div className="logout">
         <h3>Username</h3>
         <Link to="/">
            <img src={logoutIcon} />
         </Link>
      </div>
   );
}
