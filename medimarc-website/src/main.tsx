import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QuoteProvider } from "./contexts/QuoteProvider";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QuoteProvider>
      <App />
    </QuoteProvider>
  </StrictMode>
);
