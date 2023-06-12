import './Budget.css';

import { useNavigate } from 'react-router-dom';

export default function Budget(props) {
   const navigate = useNavigate();
   const budgetid = `${props.id}`;

   function handleDetails(e) {
      e.preventDefault();
      navigate(`/details/${budgetid}`);
   }

   return (
      <div className="budget">
         <h4>{props.title}</h4>
         <span>{props.value}</span>
         <div>
            <span>{`${'# '}${props.id}`}</span>
            <button onClick={handleDetails}>DETALHES</button>
            <button type="button" className="deleteButton" onClick={props.onDelete}>
               <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M2.10417 15C1.77083 15 1.47917 14.875 1.22917 14.625C0.979167 14.375 0.854167 14.0833 0.854167 13.75V1.875H0.625C0.447917 1.875 0.299479 1.81476 0.179687 1.69427C0.0598958 1.57377 0 1.42447 0 1.24635C0 1.06823 0.0598958 0.920139 0.179687 0.802083C0.299479 0.684028 0.447917 0.625 0.625 0.625H3.91667C3.91667 0.444444 3.97656 0.295139 4.09635 0.177083C4.21615 0.0590278 4.36458 0 4.54167 0H8.79167C8.96875 0 9.11719 0.0598958 9.23698 0.179687C9.35677 0.299479 9.41667 0.447917 9.41667 0.625H12.7083C12.8854 0.625 13.0339 0.685243 13.1536 0.805729C13.2734 0.926229 13.3333 1.07553 13.3333 1.25365C13.3333 1.43177 13.2734 1.57986 13.1536 1.69792C13.0339 1.81597 12.8854 1.875 12.7083 1.875H12.4792V13.75C12.4792 14.0833 12.3542 14.375 12.1042 14.625C11.8542 14.875 11.5625 15 11.2292 15H2.10417ZM2.10417 1.875V13.75H11.2292V1.875H2.10417ZM4.3125 11.3333C4.3125 11.5104 4.37274 11.6589 4.49323 11.7786C4.61373 11.8984 4.76303 11.9583 4.94115 11.9583C5.11927 11.9583 5.26736 11.8984 5.38542 11.7786C5.50347 11.6589 5.5625 11.5104 5.5625 11.3333V4.27083C5.5625 4.09375 5.50226 3.94531 5.38177 3.82552C5.26127 3.70573 5.11197 3.64583 4.93385 3.64583C4.75573 3.64583 4.60764 3.70573 4.48958 3.82552C4.37153 3.94531 4.3125 4.09375 4.3125 4.27083V11.3333ZM7.77083 11.3333C7.77083 11.5104 7.83108 11.6589 7.95156 11.7786C8.07206 11.8984 8.22137 11.9583 8.39948 11.9583C8.5776 11.9583 8.72569 11.8984 8.84375 11.7786C8.96181 11.6589 9.02083 11.5104 9.02083 11.3333V4.27083C9.02083 4.09375 8.96059 3.94531 8.8401 3.82552C8.7196 3.70573 8.5703 3.64583 8.39219 3.64583C8.21406 3.64583 8.06597 3.70573 7.94792 3.82552C7.82986 3.94531 7.77083 4.09375 7.77083 4.27083V11.3333Z" />
               </svg>
            </button>
         </div>
      </div>
   );
}