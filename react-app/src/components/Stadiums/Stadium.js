import React from 'react';

export default function Stadium({ image }) {
    return (
        <>
            <div style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div id='stadium-name'></div>
            </div>
        </>
    );
}

