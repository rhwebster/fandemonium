import React, { useState } from 'react';
import { Navlink } from 'react-router-dom';

export default function SingleTeam({...props}) {
    const [favorite, setFavorite] = useState('');
    return (
        <>
            <option id='team-menu'>
                <img src={props.logo}></img>
                <div>{props.name}</div>
                <input className='select-favorite' type='checkbox'
                    onClick={(e) => setFavorite(e.target.value)} />
            </option>
        </>
    )
};