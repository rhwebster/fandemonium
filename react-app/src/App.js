import React, { useState, useEffect } from "react";
import { dispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpFormModal";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./services/auth";
import * as sessionActions from './store/session';
import StadiumMap from './components/Map/StadiumMap';
import Splash from "./components/Splash";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Route path="/login" exact={true}>
        <Splash
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Switch>
        {/* <Route path="/login" exact={true}>
          <Splash 
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route> */}
        <ProtectedRoute>
          <NavBar setAuthenticated={setAuthenticated} />
        </ProtectedRoute>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/home" exact={true} authenticated={authenticated}>
          <h1>My Home Page</h1>
        </ProtectedRoute>
        <Route path='/stadiums'>
          <StadiumMap />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
