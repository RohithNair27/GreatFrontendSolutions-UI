import {createRoot} from 'react-dom/client'
import App from './App';
import './Main.css'
const HTMLROOT = document.getElementById('root');
const root = createRoot(HTMLROOT)

root.render(<App/>);