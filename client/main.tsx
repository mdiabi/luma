import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found");
}

// Create root only once and store it
let root = createRoot(container);

// Render the app
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Handle hot module replacement in development
if (import.meta.hot) {
  import.meta.hot.accept("./App", (newModule) => {
    if (newModule) {
      root.render(
        <StrictMode>
          <newModule.default />
        </StrictMode>,
      );
    }
  });
}
