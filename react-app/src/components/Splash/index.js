import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TopNavBar from '../NavBars/TopNavBar';
import { useSelector } from 'react-redux';
import LoginFormModal from '../auth/LoginFormModal';
import Background from './splash.jpg';
import './index.css';
import SignUpFormModal from '../auth/SignUpFormModal';
import LogoutButton from '../auth/LogoutButton';

const Splash = () => {
    const authenticate = useSelector((state) => state.session.authenticate);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div id='background-image' style={{ backgroundImage: `url(${Background})` }}>
                <TopNavBar />
                <div id='container'>
                    <div id='banner'>
                        <h1>Fandemonium!</h1>
                        <h3>Show the fan you really are</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Splash;