import "./InputBox.css"

export default function InputBox(props){
   return(
      <input 
         className={`inputBox ${props.className}`}
         type={props.inputType}
         placeholder={props.inputPlaceholder}
      />
   )
}