import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
  const authenticate = useSelector((state) => state.session.authenticate);

  return (
    <Route {...props}>
      {authenticate ? props.children  : <Redirect to="/login" />}
    </Route>
  )
};

export default ProtectedRoute;
