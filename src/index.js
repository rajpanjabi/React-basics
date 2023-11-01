//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1>React project</h1>
//     <ul>
//       <li>hello </li>
//       <li>world</li>
//       <li>react</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );
import React from "react";
import ReactDOM from "react-dom";

var name = "RJ";
var lname = "Panjabi";
var num = 9;

ReactDOM.render(
  <div>
    <h1>Hello {name + " " + lname} </h1>
    <p>Your lucky number is {num}.</p>
  </div>,
  document.getElementById("root")
);
