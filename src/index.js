import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import Apps  from "./Apps.js";


const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Apps />
  </StrictMode>
);
