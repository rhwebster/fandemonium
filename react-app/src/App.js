import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import TopNavBar from "./components/NavBars/TopNavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import * as sessionActions from './store/session';
import StadiumMap from './components/Map/StadiumMap';
import Map from './components/Map/Map';
import Splash from "./components/Splash";
import TeamPicker from "./components/Teams/teampicker";

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
          <TopNavBar />
        </Route> */}
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/favorite-team">
          <TeamPicker />
        </Route>
        <Route path='/stadiums'>
          <Map />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
