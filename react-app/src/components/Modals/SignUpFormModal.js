import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from '../auth/SignUpForm';
import { NavLink } from '../NavBar';

function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <NavLink id="signUpButton" onClick={() => {setShowModal(true)}}>Sign Up</NavLink>
            {showModal && (
            <Modal onClose={() => setShowModal(false)} name="signUp">
                <SignUpForm />
            </Modal>
            )}
        </>
    );
};

export default SignUpFormModal;