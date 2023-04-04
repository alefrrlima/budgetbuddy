import "./Footer.css"

import aleLogo from "../../images/ale-logo.svg"

export default function Footer(){
   return(
      <div className="footer">
         <div>
            <span>Alexandre Lima</span>
            <a>LinkedIn</a>
            <a>GitHub</a>
         </div>
         <img src={aleLogo}/>
      </div>
   )
}