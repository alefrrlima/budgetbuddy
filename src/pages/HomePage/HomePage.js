import "./HomePage.css"
import "../../styles/global.css"

import Header from "../../components/Header/Header.js"
import LightAside from "../../components/LightAside/LightAside.js"
import BudgetSelector from "../../components/BudgetSelector/BudgetSelector.js"
import Footer from "../../components/Footer/Footer.js"

export default function HomePage(){
   return(
      <div className="homePage pageContainer">
         <Header/>
         <LightAside 
            mainTitle="Home"
            firstParagraph="Aqui você pode criar e gerenciar seus orçamentos."
         />
         <BudgetSelector/>
         <Footer/>
      </div>   
   );
}