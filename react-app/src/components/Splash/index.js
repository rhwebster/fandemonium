import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginFormModal from '../auth/index';
import Background from './splash.jpg';
import './index.css';

const Splash = () => {
    const authenticate = useSelector((state) => state.session.authenticate);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div id='background-image' style={{ backgroundImage: `url(${Background})` }}>
                <div id='container'>
                    <div id='banner'>
                        <h1>Fandemonium!</h1>
                        <h3>Show the fan you really are</h3>
                        <LoginFormModal />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Splash;