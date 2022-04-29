import React, { useState } from 'react';
import * as sessionActions from "../../store/session";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { Modal } from '../../context/Modal';
// import DemoForm from './DemoForm';


const DemoButtonModal = () => {

    const dispatch = useDispatch;
    const history = useHistory;

    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState([]);

    const onSubmit = async (e) => {
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
            <button id='demoButton' onClick={onSubmit}>Demo</button>
        </>
    )
}

export default DemoButtonModal;