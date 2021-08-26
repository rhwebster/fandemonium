import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import TopNavBar from "./components/NavBars/TopNavBar";
import BottomNavBar from "./components/NavBars/BottomNavBar";
import * as sessionActions from './store/session';
import Splash from "./components/Splash";
import HomePage from "./components/HomePage";
import Stadiums from "./components/Stadiums/Stadiums";
import Badges from "./components/Badges";
import Photos from './components/Photos/photos';

const App = () => {
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
        <TopNavBar />
        <Splash />
        <BottomNavBar />
      </Route>
      <Switch>
        <ProtectedRoute path='/' exact>
          <TopNavBar />
          <HomePage />
          <BottomNavBar />
        </ProtectedRoute>
        <ProtectedRoute path='/stadiums' exact>
          <TopNavBar />
          <Stadiums />
          <BottomNavBar />
        </ProtectedRoute>
        <ProtectedRoute path='/badges' exact>
          <TopNavBar />
          <Badges />
          <BottomNavBar />
        </ProtectedRoute>
        <ProtectedRoute path='/photos' exact>
          <TopNavBar />
          <Photos />
          <BottomNavBar />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
