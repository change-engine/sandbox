import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Router } from "./components/Router";
import { Nav } from "./components/Nav";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Nav />
    <main>
      <Router />
    </main>
  </React.StrictMode>
);
