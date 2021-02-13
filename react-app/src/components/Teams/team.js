import React from 'react';
import { Navlink } from 'react-router-dom';

export default function SingleTeam({...props}) {

    return (
        <>
            <div className='team-menu'>
                <div>{props.logo}</div>
                <div>{props.name}</div>
                <input className='select-favorite' type='checkbox'
                    onClick={() => setFavorite(e.target.value)} />
            </div>
        </>
    )
};