import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import './index.css';

const DemoForm = ({ authenticated, setAuthenticated }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const authenticate = useSelector((state) => state.session.authenticate);

    const [errors, setErrors] = useState([]);
    const email = 'demo@aa.io';
    const password = 'password';

    const onLogin = async (e) => {
        e.preventDefault();
        setErrors([]);
        await dispatch(sessionActions.login({ email, password }))
        history.push('/')
    };

    return (
        <>
            <div id="header"><h4>Login</h4></div>
            <form className="form" onSubmit={onLogin}>
                <div>
                    {errors.map((error) => (
                        <div>{error}</div>
                    ))}
                </div>
                <div>
                    <label htmlFor="email" className="fields">Email </label>
                    <input
                        name="email"
                        type="text"
                        placeholder="demo@aa.io"
                        value={'demo@aa.io'}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="fields">Password </label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={'password'}
                    />
                    <button id="submit-button" type="submit">Login</button>
                </div>
            </form>
        </>
    );
};

export default DemoForm;