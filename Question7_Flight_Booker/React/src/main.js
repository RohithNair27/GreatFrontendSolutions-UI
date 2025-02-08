import { createRoot } from "react-dom/client";
import App from "./App";
import "./main.css";

let HTML_ROOT = document.getElementById("root");
const root = createRoot(HTML_ROOT);

root.render(<App />);
