import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DemoForm from './DemoForm';

const DemoButtonModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button id='demoButton' onClick={() =>
                setShowModal(true)}>Demo</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} name='demo'>
                    <DemoForm />
                </Modal>
            )}
        </>
    )
}

export default DemoButtonModal;