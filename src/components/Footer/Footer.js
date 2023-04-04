import "./Footer.css"

import aleLogo from "../../images/ale-logo.svg"

export default function Footer(){
   return(
      <div className="footer">
         <div>
            <span>Alexandre Lima</span>
            <a target="_blank" href="https://www.linkedin.com/in/alefrrlima/">LinkedIn</a>
            <a target="_blank" href="https://github.com/alefrrlima">GitHub</a>
         </div>
         <img src={aleLogo}/>
      </div>
   )
}