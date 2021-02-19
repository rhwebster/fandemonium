import React from "react";
import * as sessionActions from '../../store/session'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    await dispatch(sessionActions.logout())
    history.push('/login')
  }

  return <button type='submit' onClick={handleSubmit}>Logout</button>;
};

export default LogoutButton;
