import React from "react";
import ReactDOM from "react-dom";
//import Pi, { doublePi, triplePi } from "./math";
import * as name from "./math.js";
console.log(name);

ReactDOM.render(
  <ul>
    <li>{name.default}</li>
    <li>{name.doublePi()}</li>
    <li>{name.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
