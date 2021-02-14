import React from 'react';

export default function Stadium({...props}) {
    return (
        <>
            <div id='stadium-image' style={{ backgroundImage: `url(${props.image})` }}></div>
            <div id='stadium-name'>{props.name}</div>
        </>
    );
}