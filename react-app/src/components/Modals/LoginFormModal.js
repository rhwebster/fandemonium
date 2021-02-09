import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import LoginForm from '../auth/LoginForm';
import { NavLink } from '../NavBar';

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <NavLink id="login" onClick={() => {setShowModal(true)}}>Login</NavLink>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} name="login">
                    <LoginForm />
                </Modal>
            )}
        </>
    );
};

export default LoginFormModal;