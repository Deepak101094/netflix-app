import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
//? components
import HomeScreen from "./components/screen/homeScreen";
import LoginScreen from "./components/screen/loginScreen";
import { auth } from "./firebase";
//import { login , logout, selectUser } from "./features/userSlice";
import { login, logout } from "./store/action";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect( () => {
     auth.onAuthStateChanged(userAuth => {
       if(userAuth) {
         //console.log(userAuth);
         dispatch(login({
           userId: userAuth.uid,
           userEmail: userAuth.email
         }))
       } else {
         dispatch(logout)
        // alert("user logout");
       }
     })
  },[])
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
