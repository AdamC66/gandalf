import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Button } from "@blueprintjs/core";
import Home from "containers/Home";
function App() {
  return (
    <Router>
      <div>
        <Navbar>
          <Navbar.Group align="left">
            <Navbar.Heading>Gandalf</Navbar.Heading>
            <Navbar.Divider />
            <Link to="/">
              <Button className="bp3-minimal" icon="home" text="Home" />
            </Link>
            <Link to="/about">
              <Button className="bp3-minimal" icon="document" text="Files" />
            </Link>
          </Navbar.Group>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
