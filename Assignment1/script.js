
const root = document.getElementById("root");
const newEle = document.createElement("h2");
newEle.innerHTML = "Hello World from JS";
root.appendChild(newEle);


const n = React.createElement("h1", {}, "Hello WOrld From React");
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(n);

const p = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, [React.createElement("h1", { id: "h1" }, "This is an nested H1 tag"),
    React.createElement("h2", {}, "H2 tag")]));
const root2 = ReactDOM.createRoot(document.getElementById("nested"));
root2.render(p);