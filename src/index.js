// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './components/App/App.js';

// ReactDOM.render(<App />, document.querySelector('#root'));
createRoot(document.querySelector('#root')).render(<App />);
