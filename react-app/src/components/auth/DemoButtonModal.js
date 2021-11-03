import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DemoForm from './DemoForm';
import * as sessionActions from "../../store/session";


const DemoButtonModal = () => {
    const [showModal, setShowModal] = useState(false);

    const onLogin = async (e) => {
        e.preventDefault();
        setErrors([]);
        const user = { email: 'demo@aa.io', password: 'password' };
        await dispatch(sessionActions.login(user))
        history.push('/')
    };

    return (
        <>
            {/* <button id='demoButton' onClick={() =>
                setShowModal(true)}>Demo</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} name='demo'>
                    <DemoForm />
                </Modal>
            )} */}
            <button id='demoButton' onClick={onLogin}>Demo</button>
        </>
    )
}

export default DemoButtonModal;