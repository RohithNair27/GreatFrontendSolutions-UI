import {createRoot} from 'react-dom/client'
import App from './App';
import './main.css'
const ROOTELEMENT = document.getElementById('root');
const root = createRoot(ROOTELEMENT);

root.render(<App/>)
