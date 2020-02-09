import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Transactions from "./components/transactions";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import LiveLog from "./components/liveLog";
import CMDB from "./components/cmdb";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container-fluid">
          <Switch>
            <Route path="/transactions" component={Transactions}></Route>
            <Route path="/livelog" component={LiveLog}></Route>
            <Route path="/cmdb" component={CMDB}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/transactions" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
