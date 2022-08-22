import React from "react";
import ReactDOM from "react-dom/client";
// import MainRaducer from "./Components/MainRaducer";
// import UseReduceContext from "./Components/UseReduceContext";
import CrudHooks from "./CrudHooks";
import "./index.css";
// import UseRaducer from "./UseRaducer";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <UseReduceContext/>
    <UseRaducer/>
    <MainRaducer/> */}
    <CrudHooks/>
  </React.StrictMode>
);
