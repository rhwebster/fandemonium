import React from "react";
import * as sessionActions from '../../store/session'
import { useDispatch } from "react-redux";

const LogoutButton = () => {
  const dispatch = useDispatch();

  return <button onClick={() => {dispatch(sessionActions.logout())}}>Logout</button>;
};

export default LogoutButton;
