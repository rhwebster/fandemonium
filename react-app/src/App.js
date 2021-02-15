import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import TopNavBar from "./components/NavBars/TopNavBar";
import BottomNavBar from "./components/NavBars/BottomNavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import * as sessionActions from './store/session';
import Splash from "./components/Splash";
import HomePage from "./components/HomePage";
import TeamPicker from "./components/Teams/teampicker";
import Stadiums from "./components/Stadiums/Stadiums";
import Badges from "./components/Badges";
import Map from "./components/Map/Map";

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
        <Route path='/' exact={true}>
          <TopNavBar />
          <HomePage />
          <BottomNavBar />
        </Route>
        <Route path='/stadiums' exact={true}>
          <TopNavBar />
          <Stadiums />
          <BottomNavBar />
        </Route>
        <Route path='/badges' exact={true}>
          <TopNavBar />
          <Badges />
          <BottomNavBar />
        </Route>
        <Route path='/favorite-team' exact={true}>
          <TopNavBar />
          <TeamPicker />
          <BottomNavBar />
        </Route>
        <Route path='/map' exact={true}>
          <Map />
        </Route>
        {/* <ProtectedRoute path='/photos' exact={true}>
          <TopNavBar />
          <Photos />
          <BottomNavBar />
        </ProtectedRoute> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
