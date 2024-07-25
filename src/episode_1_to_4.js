






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

// let content = React.createElement("div", {id: "parent"}, [
//   React.createElement("div", {id: "child1"}, [
//     React.createElement("h1", {}, "From h1 tag!! By AAB"),
//     React.createElement("h2", {}, "From h2 tag!!"),
//   ]),
//   React.createElement("div", {id: "child1"}, [
//     React.createElement("h1", {}, "From h1 tag!!"),
//     React.createElement("h2", {}, "From h2 tag!!"),
//   ])
// ]);

// root.render(content);  # JSX render





// let Title = () => (
//   <h1 className="h1_class">
//     Component 1
//   </h1>
// )

// let HeadingComponent = () => (
//   <div id="container">
//     <Title />
//     Inside container
//   </div>
// )

// let content = (
//   <div id="parent">
//     <div id="child1">
//       <h1>From h1 tag JSX</h1>
//       <h2>From h2 tag JSX</h2>
//     </div>
//     <div id="child2">
//       <h1>From h1 tag JSX</h1>
//       <h2>From h2 tag JSX</h2>
//     </div>
//   </div>
// )
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);