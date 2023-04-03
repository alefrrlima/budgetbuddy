import "./LoginForm.css"

import BBVerticalLogo from "../BBVerticalLogo/BBVerticalLogo.js"
import InputBox from "../InputBox/InputBox.js"

export default function LoginForm(){
   return(
      <div className="loginForm">

         <BBVerticalLogo />

         <form>
            <InputBox
            inputType="email"
            inputPlaceholder="Email."
            />
            <InputBox
            inputType="password"
            inputPlaceholder="Senha."
            />

            <button></button>
         </form>

         <span></span>
         <span></span>
      </div>
   )
}