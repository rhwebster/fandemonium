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
import UploadPhotos from "./components/UploadPhotos";
import UploadPhotoForm from "./components/UploadPhotos"
import Test from '../src/components/Test';

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
      <Route path="/login" exact>
        <Splash />
      </Route>
      <Route path='/test' exact>
        <Test />
      </Route>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/stadiums' exact>
          <TopNavBar />
          <Stadiums />
          <BottomNavBar />
        </Route>
        <Route path='/badges' exact>
          <TopNavBar />
          <Badges />
          <BottomNavBar />
        </Route>
        <Route path='/favorite-team' exact>
          <TopNavBar />
          <TeamPicker />
          <BottomNavBar />
        </Route>
        <Route path='/map' exact={true}>
          <Map />
        </Route>
        <Route path='/photo-upload' exact>
          <UploadPhotoForm />
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
