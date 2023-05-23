import "./AlertMessage.css"

export default function AlertMessage(props){
   return(
      <span className="alertMessage">{props.content}</span>
   )
}