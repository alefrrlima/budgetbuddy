import "./LoginForm.css"

import "../../styles/global.css"

import BBVerticalLogo from "../BBVerticalLogo/BBVerticalLogo.js"
import InputBox from "../InputBox/InputBox.js"
import Button from "../Button/Button.js"

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

            <Button 
               text="LOGIN" 
               className="blueButton"
            />
         </form>

         <span></span>
         <span></span>
      </div>
   )
}