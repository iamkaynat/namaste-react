import React from 'react';
import ReactDOM from 'react-dom';

const jsxHeading = <h1>Hello from jsx</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

//React Element

const heading = (
    <div>
        <h2 className="heading">Hello , I am React Element</h2>
        <h3>Child react Element</h3>
    </div>
);
root.render(heading);

//Functional Component
const HeadingComponent = () => {
    return <h1>I am a functional Component!</h1>
}
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(<HeadingComponent />);

//standard way of writing a functional component 
const Heading = () => (<h1 className="standard">Standard way of writing fucntional Components</h1>);
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(<Heading />)

