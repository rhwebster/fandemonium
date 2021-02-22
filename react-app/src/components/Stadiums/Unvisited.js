import React from 'react';
import './stadiums.css';


export default function UnVisitedStadium({ image }) {
    return (
        <>
            <div classname='unvisited' style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div id='stadium-name'></div>
            </div>
        </>
    );
}