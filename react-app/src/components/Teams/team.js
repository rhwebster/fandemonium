import React from 'react';
import { Navlink } from 'react-router-dom';

export default function SingleTeam({...props}) {

    return (
        <button className='teams' type='button'>
            <div>{props.logo}</div>
            <div>{props.name}</div>
        </button>
    )
};