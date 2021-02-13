import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Stadiums({...props}) {
    return (
        <>
            <Map />
            <div className='stadium-list'>
                {teams && teams.map(team => {
                    return (
                        <div className='stadium-image'>{stadium-image}</div>
                    )
                })}
            </div>
        </>
    )
}