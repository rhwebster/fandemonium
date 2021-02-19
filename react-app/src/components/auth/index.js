import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import SignupForm from './SignUpFormModal';

function AuthFormModal() {
    const [showModal, setShowModal] = useState(false);
    const [formType, setFormType] = useState('login');

    return (
        <>
            <button onClick={() => {
                setShowModal(true)
                setFormType('login')}}>Log In</button>
            <button onClick={() => {
                setShowModal(true)
                setFormType('signUp')}}>Sign Up</button>
            {showModal && (
            <Modal onMouseDown={() => setShowModal(false)}>
                {(formType === 'login') && <LoginForm />}
                {(formType === 'signUp') && <SignupForm />}
                {/* {(formType === 'demo') && <DemoUser />} */}
            </Modal>
            )}
        </>
    )
}

export default AuthFormModal;