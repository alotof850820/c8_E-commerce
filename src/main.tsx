import ReactDOM from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import "./style/main.scss";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
