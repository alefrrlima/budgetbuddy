import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LightAside from "../../components/LightAside/LightAside";

import "./NewBubgetPage.css"

export default function NewBubgetPage(){
   return(
      <div className="newBubgetPage pageContainer">
         <Header/>
         <LightAside
            mainTitle="Novo Orçamento"
            firstParagraph="Adicione um título, destinatário e as demais informações."
         />
         <Footer/>
      </div>
   );
}