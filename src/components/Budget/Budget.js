import "./Budget.css"

export default function Budget(props){
   return(
      <div className="budget">
         <h4>{props.title}</h4>
         <span>{props.value}</span>
         <span>{props.id}</span>
         <button>DETALHES</button>
      </div>
   )
}