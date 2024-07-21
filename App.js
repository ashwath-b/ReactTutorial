// let heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     className: "test",
//     data_test: "abc"
//   },
//   "Hello World from React!!"
// );
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


let parent = React.createElement("div", {id: "parent"}, [
  React.createElement("div", {id: "child1"}, [
    React.createElement("h1", {}, "From h1 tag!!"),
    React.createElement("h2", {}, "From h2 tag!!"),
  ]),
  React.createElement("div", {id: "child1"}, [
    React.createElement("h1", {}, "From h1 tag!!"),
    React.createElement("h2", {}, "From h2 tag!!"),
  ])
]);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);