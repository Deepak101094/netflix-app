import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
//? components
import HomeScreen from "./components/screen/homeScreen";
import LoginScreen from "./components/screen/loginScreen";

function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
        <Switch>
          {!user ? (
            <LoginScreen />
          ) : (
            <Route exact={true} path="/">
              <HomeScreen />
            </Route>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
