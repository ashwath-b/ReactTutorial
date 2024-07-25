import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";

const App = () => {
  return (
    <div id="app">
      <Header />
      <Body />
    </div>
  )
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);