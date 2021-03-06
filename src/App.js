import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages
import AdminLogin from "./views/pages/login/AdminLogin";
import Home from "./views/pages/home/Home";
import AdminDashboard from "../src/views/pages/dashboard/AdminDashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'  render={() => <Home />} />
          <Route exact path='/pakistan/login'  render={() => <AdminLogin />} />
          <Route exact path='/pakistan/dashboard'  render={() => <AdminDashboard />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
