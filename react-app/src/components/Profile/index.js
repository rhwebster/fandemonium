import React, { useReducer, useState } from 'react';
import './index.css';

function Profile() {


    const badgeCount = user.badges.length

    return (
        <>
            <div className='profile'>
                <div className="profile-content">
                    {user.profPic}
                    {user.name}
                    {user.username}
                </div>
                <div className='points'>
                    {user.points}
                    Points
                </div>
                <div className='badges'>
                    {user.badgeCount}
                    Badges
                </div>
            </div>
        </>
    )
}