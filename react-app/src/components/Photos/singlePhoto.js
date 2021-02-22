import React from 'react';

const SinglePhoto = ({ image, caption }) => {
    return (
        <>
            <div style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
            <div id='caption'>{caption}</div>
        </>
    );
};

export default SinglePhoto;