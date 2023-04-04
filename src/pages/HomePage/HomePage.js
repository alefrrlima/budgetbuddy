import "./HomePage.css"
import "../../styles/global.css"

import Header from "../../components/Header/Header.js"
import Footer from "../../components/Footer/Footer.js"

export default function HomePage(){
   return(
      <div className="homePage">
         <Header/>
         <Footer/>
      </div>   
   );
}