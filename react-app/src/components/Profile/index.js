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
                <div className='parks-visited'>
                    {user.visited_stadiums}
                    Parks Visited
                </div>
                <div className='teams-seen'>
                    {user.teams_seen}
                    Teams Seen
                </div>
            </div>
        </>
    )
}