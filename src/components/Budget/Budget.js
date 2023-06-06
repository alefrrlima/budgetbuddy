import './Budget.css';

export default function Budget(props) {
   return (
      <div key={props.key} className="budget">
         <h4>{props.title}</h4>
         <span>{props.value}</span>
         <div>
            <span>{props.id}</span>
            <button>DETALHES</button>
         </div>
      </div>
   );
}
