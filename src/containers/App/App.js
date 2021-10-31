import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "containers/Home";
import Login from "containers/Login";
import Header from "components/Header";
import { AuthProvider } from "context/AuthContext";
import PrivateRoute from "components/PrivateRoute";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Header />
          <Switch>
            <PrivateRoute path="/about" component={About} />

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
