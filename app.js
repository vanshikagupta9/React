// import React from '../node_modules/react/app.js';
import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id:"xyz"}, "Hello World From React!")
// console.log(heading)//object
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading);
//React.createElement => ReactElement-JS Object => HTMLElement(render)

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
    React.createElement("h3", {}, "I am a h4 tag"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
    React.createElement("h3", {}, "I am a h5 tag"),
  ]),
]);

//JSX-> HTML-like sysntax => React.createElement => ReactElement-JS Object => HTMLElement(render)

//JSX (transpiled before it reaches the JS)- Parcel- Babel(babel is converting jxs code to react element)

//Single line JSX code:- const jsxHeading = <h1 id="abc" className="head" tabIndex={1}>Hello World from JSX</h1>

//Multiple line JSx code(needs mandatoraly parenthesis)= React Element
const jsxHeading = (
  <h1 id="abc" className="head" tabIndex={1}>
    Hello World from JSX
  </h1>
);

//----------------------------------------------------------//

//Functional Component-1
const Head = function () {
  return (
    <h1 id="abc" className="head" tabIndex={1}>
      {"Hey "}
      Component Composition
    </h1>
  );
};

//2nd React Functional Component= should be declared in caps
const HeadingComponent = () => (
  <div id="container">
    <Head />
    {jsxHeading}
    {100}

    <h1 className="heading">React Functional Component</h1>
  </div>
);
//{jsxHeading} - this means injecting react element/jsx code inside functional element using curly braces
//Using {} we can put any code inside functional component or inside jsx code
//<Head /> : Component Composition is composing one functional component inside another functional component

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading); //This is we are rendering a react element
console.log(jsxHeading);

root.render(<HeadingComponent />); //This is how we render a functional component
