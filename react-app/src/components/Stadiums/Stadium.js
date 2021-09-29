import React from 'react';
//implement adding ticket stub images next
//display only for stadiums that have been visited

export default function Stadium({ image }) {
    return (
        <>
            <div style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div id='stadium-name'></div>
            </div>
        </>
    );
}

