import "./InputCheckBox.css"

export default function InputCheckBox(props){
   return(
      <div className="inputCheckBox">
         <input type="checkbox" id={props.inputId} value={props.inputValue}/>
         <label for={props.inputId}>{props.inputLabel}</label>
      </div>
      
   )
}