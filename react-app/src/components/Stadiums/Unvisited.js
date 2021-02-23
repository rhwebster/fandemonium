import React from 'react';
import styled from 'styled-components';
import './stadiums.css';

export default function UnVisited({ image }) {
    return (
        <>
            <div className='unvisited' style={{ backgroundImage: `url(${image})`,
                backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <div id='stadium-name'></div>
            </div>
        </>
    );
}