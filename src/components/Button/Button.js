import "./Button.css"

import "../../styles/global.css"

export default function Button(props){
   return(
      <button onClick={props.onClick} className={`button ${props.className}`}>
         {props.text}
      </button>
   )
}