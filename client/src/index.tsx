import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { TaskProvider } from "./context/TaskContext";
import App from "./App";
import { Amplify } from "aws-amplify";

import config from "./aws-exports";
Amplify.configure(config);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
);
