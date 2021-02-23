import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './index.css';

const Splash = () => {
    const authenticate = useSelector((state) => state.session.authenticate);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <div id='container'>
            <div id='splash-banner'>
                <div id='splash-content'>
                    <h1>Fandemonium</h1>
                    <h3>Show the world the fan you are</h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default Splash;