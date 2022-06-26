import ReactDOM from "react-dom/client";

import App from "./App";
import Pictures from "./Components/Pictures";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
  <>
    <App />
    <Pictures />
  </>
  
);
