import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Policy from "./Components/Policy";
import Edit from "./Components/Edit";

function App() {
  return (
    <Fragment>
      <Policy />
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
