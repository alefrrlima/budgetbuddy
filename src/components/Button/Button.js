import "./Button.css"

import "../../styles/global.css"

export default function Button(props){
   return(
      <button type={props.type} onClick={props.onClick} className={`button ${props.className}`}>
         {props.text}
      </button>
   )
}