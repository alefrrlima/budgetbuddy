import './NewBudgetForm.css';

import InputBox from '../../components/InputBox/InputBox.js';

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
            <InputBox 
            inputType="number" 
            inputPlaceholder="Valor"
            />
         </form>
      </div>
   );
}
