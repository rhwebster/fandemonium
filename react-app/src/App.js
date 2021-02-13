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
import TeamPicker from "./components/Teams/teampicker";
import Stadiums from "./components/Stadiums/Stadium";
import Badges from "./components/Badges";

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
        <ProtectedRoute path='/stadiums' exact={true}>
          <TopNavBar />
          <Stadiums />
          <BottomNavBar />
        </ProtectedRoute>
        <ProtectedRoute path='/badges' exact={true}>
          <TopNavBar />
          <Badges />
          <BottomNavBar />
        </ProtectedRoute>
        <ProtectedRoute path='/photos' exact={true}>
          <TopNavBar />
          <Photos />
          <BottomNavBar />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
