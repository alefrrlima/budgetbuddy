import './DarkAside.css';

export default function DarkAside(props) {
   return (
      <div className='darkAside'>

         <div>
            <h1>{props.mainTitle}</h1>
            <article>
               <p>{props.firstParagraph}</p>
               <p>{props.secondParagraph}</p>
            </article>
         </div>

      </div>
   );
}
