import "./LightAside.css"

export default function LightAside(props){
   return(
      <div className="lightAside">
         <h1>{props.mainTitle}</h1>
         <p>{props.firstParagraph}</p>
      </div>
   )
}