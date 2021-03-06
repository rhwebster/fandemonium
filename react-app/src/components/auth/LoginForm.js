import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import './index.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [key] = React.useState(nanoid)
  const authenticate = useSelector((state) => state.session.authenticate);

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    setErrors([]);
    await dispatch(sessionActions.login({email, password}))
    history.push('/')
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  if (authenticate) {
    return <Redirect to='/' />;
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div id="header"><h4>Login</h4></div>
        <form className="form" onSubmit={onLogin}>
          <div>
            {errors.map((error) => (
              <div key={key}>{error}</div>
            ))}
          </div>
          <div>
          <label htmlFor="email" className="fields">Email </label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
          <label htmlFor="password" className="fields">Password </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
          <button id="submit-button" type="submit">Login</button>
          </div>
        </form>
    </>
  );
};

export default LoginForm;
