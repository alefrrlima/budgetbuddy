import DarkAside from "../../components/DarkAside/DarkAside.js"
import SignInForm from "../../components/SignInForm/SignInForm.js"

import "./SignInPage.css"

export default function SignInPage(){
   return(
      <div className="signInPage">
         <div className="whiteContainer centerContent">
            <SignInForm/>
         </div>
         <DarkAside
            mainTitle = 'Cadastro'
            firstParagraph = 'É necessário realizar um cadastro para utilizar a aplicação.'
            secondParagraph = 'Não se preocupe, seus dados serão utilizados somente durante sua sessão.'
         />
      </div>
   )
}