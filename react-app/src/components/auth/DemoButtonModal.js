import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DemoForm from './DemoForm';
import * as sessionActions from "../../store/session";


const DemoButtonModal = () => {
    const [showModal, setShowModal] = useState(false);

    const onLogin = async (e) => {
        e.preventDefault();
        setErrors([]);
        await dispatch(sessionActions.login({ 'demo@aa.io', 'password' }))
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