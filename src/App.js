import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import Appointments from "./components/Appointments";
import Help from "./components/Help";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import Register from "./components/Register";
import Reservation from "./components/Reservation";
import ForgotPassword from "./components/ForgotPassword";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import "./css/style.css";

const App = () => {

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route  path="/" component={() => (<Redirect to="/Home" />)} exact />
        <Route path="/Home" component={Home} exact />
        <Route path="/Appointments" component={Appointments} exact />
        <Route path="/Help" component={Help} exact />
        <Route path="/AboutUs" component={AboutUs} exact />
        <Route path="/Login" component={Login} exact />
        <Route path="/Register" component={Register} exact />
        <Route path="/Reservation" component={Reservation} exact />
        <Route path="/ForgotPassword" component={ForgotPassword} exact />
        <Route path="/Privacy" component={Privacy} exact />
        <Route path="/Terms" component={Terms} exact />
      </Switch>
    </Router>
  );
}

export default App;