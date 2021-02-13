import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
                <div id='container'>
                    <div id='banner'>
                        <h1>Fandemonium!</h1>
                        <h3>Show the fan you really are</h3>
                    </div>
                    <div className='links'>
                        <span className='link-text'>
                        {!authenticate && (
                        <SignUpFormModal />)}</span>
                    </div>
                    <div className='links'>
                        <span className='link-text'>
                        {!authenticate && (
                        <LoginFormModal />)}</span>
                    </div>
                    <div className='links'>
                        <span className='link-text'>
                        {authenticate && (
                            <LogoutButton />)}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Splash;