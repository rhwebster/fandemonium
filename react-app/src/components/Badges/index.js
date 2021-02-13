import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Badges({ ...props }) {
    return (
        <>
            <div className='badge-list'>
                {teams && teams.map(team => {
                    return (
                        <div className='badge-image'>{badge - image}</div>
                    )
                })}
            </div>
        </>
    )
}