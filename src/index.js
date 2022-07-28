import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import "./index.css";
import Container from "./components/container/Container.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
);
