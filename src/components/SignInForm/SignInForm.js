import BBVerticalLogo from "../BBVerticalLogo/BBVerticalLogo";
import InputBox from "../InputBox/InputBox";
import Button from "../Button/Button";
import AlertMessage from "../AlertMessage/AlertMessage";

import "./SignInForm.css"

export default function SignInForm(){
   return(
      <div className="signInForm">
         <BBVerticalLogo/>
         <form>
            <InputBox 
               inputType="text" 
               inputPlaceholder ="Seu primeiro nome."
            />
            <InputBox 
               inputType="email" 
               inputPlaceholder ="Seu email."
            />
            <InputBox 
               inputType="email" 
               inputPlaceholder ="Repita seu email."
            />
            <InputBox 
               inputType="password" 
               inputPlaceholder ="Sua senha."
            />
            <InputBox 
               inputType="password" 
               inputPlaceholder ="Repita sua senha."
            />
            <Button text="CADASTRAR" className="blueButton"/>
            <AlertMessage/>
         </form>
      </div>
   )
}