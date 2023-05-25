import './TextArea.css';

export default function TextArea(props) {
   return (
      <textarea placeholder={props.placeholder} className="textArea" onChange={props.onChange} value={props.value}>
         {props.textContent}
      </textarea>
   );
}
