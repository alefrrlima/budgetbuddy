import "./InputBox.css"

export default function InputBox(props){
   return(
      <input 
         className="inputBox"
         type={props.inputType}
         placeholder={props.inputPlaceholder}
      />
   )
}