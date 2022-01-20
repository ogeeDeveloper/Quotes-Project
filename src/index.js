import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter
    getUserConfirmation={() => {
      /* Empty callback to block the default browser prompt */
    }}
  >
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
