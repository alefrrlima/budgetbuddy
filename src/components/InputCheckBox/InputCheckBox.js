import "./InputCheckBox.css"

export default function InputCheckBox(props){
   return(
      <div className="inputCheckBox">
         <input type="checkbox" id={props.id} value={props.value} onChange={props.onChange} checked={props.checked} onClick={props.onClick}/>
         <label for={props.id}>{props.label}</label>
      </div>
      
   )
}