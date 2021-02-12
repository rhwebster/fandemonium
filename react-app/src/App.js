import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import * as sessionActions from './store/session';
import StadiumMap from './components/Map/StadiumMap';
import Splash from "./components/Splash";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.authenticate())
    setLoaded(true);
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Route path="/login" exact={true}>
        <Splash />
      </Route>
      <Switch>
        {/* <Route>
          <NavBar />
        </Route> */}
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        {/* <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute> */}
        {/* <ProtectedRoute path="/home" exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute> */}
        <Route path='/stadiums'>
          <StadiumMap />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
