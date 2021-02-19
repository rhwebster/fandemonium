import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

const LoginFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button id='loginButton' onClick={() => 
                setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} name='login'>
                    <LoginForm />
                </Modal>
            )}
        </>
    )
}

export default LoginFormModal;