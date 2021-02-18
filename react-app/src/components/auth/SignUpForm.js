import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../services/auth';
import { Modal } from '../../context/Modal';
import './index.css';


const SignUpForm = ({authenticated}) => {

    const history = useHistory();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [showModal, setShowModal] = useState(false);

    const onSignUp = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            const user = await signUp(username, email, password);
        }
        setShowModal(true)
        history.push('/favorite-team');
    };
    
    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    if (authenticated) {
        return <Redirect to="/home" />;
    }

    return (
        <>
            <form onSubmit={onSignUp}>
                <div id="header"><h4>Sign Up! Join the Fandom!</h4></div>
                <div>
                    <label className="fields">User Name </label>
                    <input
                        type="text"
                        name="username"
                        onChange={updateUsername}
                        value={username}
                    ></input>
                </div>
                <div>
                    <label className="fields">Email </label>
                    <input
                        type="text"
                        name="email"
                        onChange={updateEmail}
                        value={email}
                    ></input>
                </div>
                <div>
                    <label className="fields">Password </label>
                    <input
                        type="password"
                        name="password"
                        onChange={updatePassword}
                        value={password}
                    ></input>
                </div>
                <div>
                    <label className="fields">Confirm Password </label>
                    <input
                        type="password"
                        name="repeat_password"
                        onChange={updateRepeatPassword}
                        value={repeatPassword}
                        required={true}
                    ></input>
                </div>
                <button id="submit-button" type="submit">Sign Up </button>
            </form>
        </>
    )
};

export default SignUpForm;
