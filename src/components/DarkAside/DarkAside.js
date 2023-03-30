import './DarkAside.css';

export default function DarkAside(props) {
   return (
      <div>
         <h1>{props.mainTitle}</h1>
         <div>
            <p>{props.firstParagraph}</p>
            <p>{props.secondParagraph}</p>
         </div>
      </div>
   );
}
