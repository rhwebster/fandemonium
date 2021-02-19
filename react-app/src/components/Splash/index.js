import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TopNavBar from '../NavBars/TopNavBar';
import { useSelector } from 'react-redux';
import LoginFormModal from '../auth/LoginFormModal';
import Background from './splash.jpg';
import './index.css';
import SignUpFormModal from '../auth/SignUpFormModal';
import LogoutButton from '../auth/LogoutButton';
import BottomNavBar from '../NavBars/BottomNavBar';

const Splash = () => {
    const authenticate = useSelector((state) => state.session.authenticate);
    const [showModal, setShowModal] = useState(false);

    return (
        <div id='container'>
            <div id='splash-banner'>
                <div id='splash-content'>
                    <h1>Fandemonium</h1>
                    <h3>Show the world the fan you are</h3>
                </div>
            </div>
        </div>
    )
}

export default Splash;