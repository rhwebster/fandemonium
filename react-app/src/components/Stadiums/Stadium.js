import React from 'react';
import { checkinStadium } from '../../store/stadium';

export default function Stadium({...props}) {
    return (
        <>
            <div id='stadium-image' style={{ backgroundImage: `url(${props.image})` }}>
                <div id='stadium-name'>{props.name}</div>
            </div>
        </>
    );
}