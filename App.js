import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpoled before it reaches the JS) - PARCEL - BAbel
// JSX => React.createElement => ReactElement-JS object => HTMLElement(render)

const eading2222 = <h1 className="head" tabIndex="3">This is reactJS</h1>
console.log(eading2222);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(eading2222)

