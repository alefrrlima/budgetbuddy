import './NewBudgetForm.css';

import InputBox from '../../components/InputBox/InputBox.js';
import InputCheckBox from "../../components/InputCheckBox/InputCheckBox.js"

export default function NewBudgetForm() {
   return (
      <div className="newBudgetForm">
         <form>
            <InputBox 
            inputType="text" 
            inputPlaceholder="Título" 
            />
            <InputBox 
            inputType="text" 
            inputPlaceholder="Destinatário" 
            />

            <div className='checkboxContainer'>
               <InputCheckBox
               inputValue="product"
               inputLabel="Produto"
               />

               <InputCheckBox
               inputValue="service"
               inputLabel="Serviço"
               />
            </div>
            
            <InputBox 
            inputType="number" 
            inputPlaceholder="Valor"
            />
         </form>
      </div>
   );
}
