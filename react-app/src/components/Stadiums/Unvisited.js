import React from 'react';
import styled from 'styled-components';
import './stadiums.css';

export default function UnVisited({ image }) {
    return (
        <>
            <div classname='unvisited' style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundTintColor: 'gray' }}>
                <div id='stadium-name'></div>
            </div>
        </>
    );
}