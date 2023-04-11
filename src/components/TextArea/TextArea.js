import './TextArea.css';

export default function TextArea(props) {
   return (
      <textarea placeholder={props.placeholder} className="textArea">
         {props.textContent}
      </textarea>
   );
}
