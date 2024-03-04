// import React from '../node_modules/react/app.js';
import React from "react";
import  ReactDOM  from "react-dom/client";

// const h1 = React.createElement("h1", {id:"xyz"}, "Hello World From React!")
// console.log(h1)//object
// const r1 = ReactDOM.createRoot(document.getElementById("rot"))
// r1.render(h1);

const parent=React.createElement("div", {id:"parent"},
[
React.createElement("div", {id:"child"},
[React.createElement("h1", {}, "I am a h1 tag"),
React.createElement("h2", {}, "I am a h2 tag"),
React.createElement("h3", {}, "I am a h4 tag")]
),

React.createElement("div", {id:"child2"},
[React.createElement("h1", {}, "I am a h1 tag"),
React.createElement("h2", {}, "I am a h2 tag"),
React.createElement("h3", {}, "I am a h5 tag")]
)
]
)

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
console.log(parent)