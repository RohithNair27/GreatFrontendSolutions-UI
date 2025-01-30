import { createRoot } from "react-dom/client";
import App from "./app";
import "./main.css";
const ROOTELEMENT = document.getElementById("root");
const root = createRoot(ROOTELEMENT);

root.render(<App />);
