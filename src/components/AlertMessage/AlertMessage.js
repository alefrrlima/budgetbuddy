import './AlertMessage.css';

export default function AlertMessage(props) {
   return (
      <span className={`alertMessage ${props.color}`}>{props.content}</span>
   );
}
