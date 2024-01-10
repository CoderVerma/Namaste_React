// const heading = React.createElement("h1", {id:"heading"}, "Hello from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"div"},[
React.createElement("h1",{},"I'm heading 1"),
React.createElement("h2",{},"I'm heading 2"),])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
