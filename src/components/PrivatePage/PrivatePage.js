import '/PrivatePage.css';

export default function PrivatePage() {

   const loggedUser = localStorage.getItem("loggedUser")

   if(loggedUser){
      return(
         <div>
            {/* "Conteúdo da página" */}
         </div>
      )

   }
   else {
      
   }

   return <></>;
}
