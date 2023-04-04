import "./Header.css"

import BBHorizontalLogo from "../BBHorizontalLogo/BBHorizontalLogo.js"
import Logout from "../Logout/Logout.js"

export default function Header(){
   return(
      <div className="header">
         <BBHorizontalLogo/>
         <Logout/>
      </div>
   )
}